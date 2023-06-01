<script lang="ts">
  import DirectoryTreeView from "./DirectoryTreeView.svelte";
  import SelectDirectoryModal from "./SelectDirectoryModal.svelte";
  interface FileFolderCollection {
    type: string;
    name: string;
    path: number[];
    children: FileFolderCollection[];
  }

  let input = "";
  let inputType = "";
  let isSelectDirectoryModalOpen = false;

  const createRootDirectory = () => {
    const directory = {
      type: "folder",
      name: "Root",
      path: [0],
      // children: [
      //   {
      //     type: "folder",
      //     name: "l11",
      //     path: [0, 0],
      //     children: [],
      //   },
      //   {
      //     type: "folder",
      //     name: "l12",
      //     path: [0, 1],
      //     children: [
      //       {
      //         type: "folder",
      //         name: "l21",
      //         path: [0, 1, 0],
      //         children: [],
      //       },
      //     ],
      //   },
      //   {
      //     type: "folder",
      //     name: "l13",
      //     path: [0, 2],
      //     children: [],
      //   },
      //   {
      //     type: "folder",
      //     name: "l14",
      //     path: [0, 3],
      //     children: [
      //       {
      //         type: "folder",
      //         name: "l21",

      //         path: [0, 3, 0],
      //         children: [],
      //       },
      //     ],
      //   },
      // ],
      children: [],
    };

    localStorage.setItem("file-folder-collection", JSON.stringify([directory]));
    return [directory];
  };

  const getAllDirectories = () => {
    let dataStorage = localStorage.getItem("file-folder-collection");
    if (dataStorage) {
      // console.log(JSON.parse(data));
      return JSON.parse(dataStorage);
    } else {
      return createRootDirectory();
    }
  };

  let fileFolderData: FileFolderCollection[] = null;
  let selectedPath: number[] = [];
  let directories = [];

  if (!fileFolderData) {
    console.log("set initial data");
    fileFolderData = getAllDirectories();
  }

  const toggleSelectDirectoryModalOpen = () => {
    getAllDirectories();
    directories = getAllDirectoriesTillLevel2(fileFolderData, 0);
    // console.log(directories);
    isSelectDirectoryModalOpen = !isSelectDirectoryModalOpen;
  };

  const resetForm = () => {
    input = "";
    inputType = "";
    selectedPath = [];
  };

  const resetDropdown = () => {
    inputType = "";
  };

  const resetSelectedPath = () => {
    selectedPath = [];
  };

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    input = e.target.value.trim();
  };

  const handleDropdownValueChange = (e) => {
    if (e.target.value !== "") {
      inputType = e.target.value;
      selectedPath = [];
      toggleSelectDirectoryModalOpen();
    }
  };

  const setSelectedPath = (event) => {
    selectedPath = event?.detail?.path;
    // console.log(selectedPath);
  };

  let getAllDirectoriesTillLevel2 = (fileFolderData, lvl) => {
    let arr = [];
    if (lvl >= 2) return arr;
    fileFolderData.forEach((item) => {
      if (item.type === "folder") {
        arr.push(item);
        if (item.children.length) {
          arr = [
            ...arr,
            ...getAllDirectoriesTillLevel2(item.children, lvl + 1),
          ];
        }
      }
    });
    return arr;
  };

  const handleSubmit = () => {
    console.log(input);
    console.log(inputType);
    console.log(selectedPath);

    let folderToSave = fileFolderData[0];
    if (selectedPath.length > 1) {
      folderToSave = folderToSave.children[selectedPath[1]];
    }

    saveData(folderToSave, input, inputType);

    updateLocalStorage(fileFolderData);
    fileFolderData = getAllDirectories();
    resetForm();
  };

  const updateLocalStorage = (fileFolderData) => {
    localStorage.setItem(
      "file-folder-collection",
      JSON.stringify(fileFolderData)
    );
  };

  const saveData = (folderToSave, name, inputType) => {
    for (let child of folderToSave.children) {
      if (child.type === inputType && child.name === name) {
        console.warn("duplicate " + inputType);
        return;
      }
    }
    const dataToSave = {
      type: inputType,
      name,
      path: [...folderToSave.path, folderToSave.children.length],
      ...(inputType === "folder" && { children: [] }),
    };
    console.log(dataToSave);
    folderToSave.children.push(dataToSave);
  };

  $: viewData = fileFolderData?.length ? getAllDirectories() : [];
</script>

<div class="w-100">
  <div class="flex space-between">
    <input
      id="input"
      type="text"
      value={input}
      class="input"
      on:change={handleInputChange}
      on:keyup={handleInputChange}
      placeholder="Write Folder or File Name"
    />
    <select
      name="input_type"
      id="input_type"
      on:change={handleDropdownValueChange}
      class="input-dropdown"
      value={inputType}
      disabled={!input}
    >
      <option value="">Select Type</option>
      <option value="file">File</option>
      <option value="folder">Folder</option>
    </select>
  </div>
  <div>
    <button disabled={!input || !selectedPath.length} on:click={handleSubmit}
      >Save</button
    >
    <button disabled={!input} on:click={resetForm}>Cancel</button>
  </div>
  {#if isSelectDirectoryModalOpen && input}
    <SelectDirectoryModal
      on:modalClose={toggleSelectDirectoryModalOpen}
      fileFolderData={directories}
      {selectedPath}
      on:folder-select={setSelectedPath}
      on:resetDropdown={resetDropdown}
      on:resetSelectedPath={resetSelectedPath}
    />
  {/if}

  <div class="w-60 m-auto p-30">
    <h2>Data Heirarchy</h2>
    {#key fileFolderData}
      <DirectoryTreeView level={0} fileFolderData={viewData} />
    {/key}
  </div>
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
