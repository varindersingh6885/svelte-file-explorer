<script lang="ts">
  import SelectDirectoryModal from "./SelectDirectoryModal.svelte";
  interface FileFolderCollection {
    type: string;
    name: string;
    path: number[];
    children: FileFolderCollection[];
  }

  let input = "";
  let inputType = "file";
  let isSelectDirectoryModalOpen = false;
  let fileFolderData: FileFolderCollection[] = [];
  let selectedPath: number[] = [];
  let directories = [];

  const toggleSelectDirectoryModalOpen = () => {
    getAllDirectories();
    directories = getAllDirectoriesTillLevel2(fileFolderData);
    console.log(directories);
    isSelectDirectoryModalOpen = !isSelectDirectoryModalOpen;
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    input = e.target.value.trim();
  };

  const handleDropdownValueChange = (e) => {
    console.log(e.target.value);
    inputType = e.target.value;
  };

  const getAllDirectories = () => {
    let dataStorage = localStorage.getItem("file-folder-collection");
    if (dataStorage) {
      // console.log(JSON.parse(data));
      fileFolderData = JSON.parse(dataStorage);
    } else {
      fileFolderData = createRootDirectory();
    }
  };

  const setSelectedPath = (event) => {
    selectedPath = event?.detail?.path;
    // console.log(selectedPath);
  };

  let getAllDirectoriesTillLevel2 = (fileFolderData) => {
    let arr = [];
    fileFolderData.forEach((item) => {
      if (item.type === "folder") {
        arr.push(item);
        if (item.children.length) {
          arr = [...arr, ...getAllDirectoriesTillLevel2(item.children)];
        }
      }
    });
    return arr;
  };

  const createRootDirectory = () => {
    const directory = {
      type: "folder",
      name: "Root",
      path: [0],
      children: [
        {
          type: "folder",
          name: "l11",
          path: [0, 0],
          children: [],
        },
        {
          type: "folder",
          name: "l12",
          path: [0, 1],
          children: [
            {
              type: "folder",
              name: "l21",
              path: [0, 1, 0],
              children: [],
            },
          ],
        },
        {
          type: "folder",
          name: "l13",
          path: [0, 2],
          children: [],
        },
        {
          type: "folder",
          name: "l14",
          path: [0, 3],
          children: [
            {
              type: "folder",
              name: "l21",

              path: [0, 3, 0],
              children: [],
            },
          ],
        },
      ],
    };

    localStorage.setItem("file-folder-collection", JSON.stringify([directory]));
    return [directory];
  };
</script>

<div class="w-100">
  <div class="flex space-between">
    <input
      id="input"
      type="text"
      value={input}
      class="input"
      on:change={handleInputChange}
    />
    <select
      name="input_type"
      id="input_type"
      on:change={handleDropdownValueChange}
      class="input-dropdown"
      value={inputType}
    >
      <option value="file">File</option>
      <option value="folder">Folder</option>
    </select>
  </div>
  <div>
    <button on:click={toggleSelectDirectoryModalOpen}>Save</button>
    <button>Cancel</button>
  </div>
  {#if isSelectDirectoryModalOpen && input}
    <SelectDirectoryModal
      on:modalClose={toggleSelectDirectoryModalOpen}
      fileFolderData={directories}
      {selectedPath}
      on:folder-select={setSelectedPath}
    />
  {/if}
</div>

<style>
  .input {
    padding: 0.7rem;
    width: 80%;
    margin: 10px;
  }
  .input-dropdown {
    width: 20%;
    margin: 10px;
    text-align: center;
  }

  .input-dropdown option {
    width: 20%;
    margin: 10px;
    text-align: center;
  }
</style>
