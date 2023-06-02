<svelte:options tag="input-form" />

<script lang="ts">
  import DirectoryTreeView from "./DirectoryTreeView.svelte";
  import SelectDirectoryModal from "./SelectDirectoryModal.svelte";
  import { directoryStore, selectedPathStore } from "./stores";
  import { getAllDirectories, updateLocalStorage } from "./utils";
  // interface FileFolderCollection {
  //   type: string;
  //   name: string;
  //   path: number[];
  //   children: FileFolderCollection[];
  // }

  let input: string = "";
  let inputType: string = "";
  let isSelectDirectoryModalOpen = false;
  const baseLevel = 0;

  // const createRootDirectory = () => {
  //   const directory = {
  //     type: "folder",
  //     name: "Root",
  //     path: [0],
  //     children: [],
  //   };

  //   localStorage.setItem("file-folder-collection", JSON.stringify([directory]));
  //   return [directory];
  // };

  // const getAllDirectories = () => {
  //   let dataStorage = localStorage.getItem("file-folder-collection");
  //   if (dataStorage) {
  //     return JSON.parse(dataStorage);
  //   } else {
  //     return createRootDirectory();
  //   }
  // };

  // let allDirectoryData: FileFolderCollection[] = null;

  let allDirectoryData: DirectoryData[] = [];

  directoryStore.subscribe((value) => {
    allDirectoryData = value;
  });

  let selectedPath: number[] = [];

  // let directories = [];

  // if (!allDirectoryData) {
  //   directoryStore.set(createRootDirectory());
  // }

  selectedPathStore.subscribe((value) => {
    selectedPath = value;
  });

  const toggleSelectDirectoryModalOpen = () => {
    // directoryStore.set(getAllDirectories());
    // directories = getAllDirectoriesTillLevel2(allDirectoryData, 0);
    isSelectDirectoryModalOpen = !isSelectDirectoryModalOpen;
  };

  const resetForm = () => {
    input = "";
    inputType = "";
    selectedPathStore.set([]);
  };

  const resetDropdown = () => {
    inputType = "";
  };

  // const resetSelectedPath = () => {
  //   selectedPathStore.set([]);
  // };

  const handleInputChange = (e) => {
    input = e.target.value.trim();
  };

  const handleDropdownValueChange = (e) => {
    if (e.target.value !== "") {
      inputType = e.target.value;
      selectedPathStore.set([]);
      toggleSelectDirectoryModalOpen();
    }
  };

  // const setSelectedPath = (event) => {
  //   selectedPathStore.set(event?.detail?.path);
  // };

  // let getAllDirectoriesTillLevel2 = (allDirectoryData, lvl) => {
  //   let arr = [];
  //   if (lvl >= 2) return arr;
  //   allDirectoryData.forEach((item) => {
  //     if (item.type === "folder") {
  //       arr.push(item);
  //       if (item.children.length) {
  //         arr = [
  //           ...arr,
  //           ...getAllDirectoriesTillLevel2(item.children, lvl + 1),
  //         ];
  //       }
  //     }
  //   });
  //   return arr;
  // };

  const handleSubmit = () => {
    let folderToSave = allDirectoryData[0];
    if (selectedPath.length > 1) {
      folderToSave = folderToSave.children[selectedPath[1]];
    }

    saveData(folderToSave, input, inputType);

    updateLocalStorage(allDirectoryData);

    allDirectoryData = getAllDirectories();
    resetForm();
  };

  // const updateLocalStorage = (allDirectoryData) => {
  //   localStorage.setItem(
  //     "file-folder-collection",
  //     JSON.stringify(allDirectoryData)
  //   );
  // };

  const saveData = (folderToSave, name, inputType) => {
    for (let child of folderToSave.children) {
      if (child.type === inputType && child.name === name) {
        alert(
          `${inputType.toUpperCase()} named "${name}" already exists \n In the selected directory!`
        );
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
    folderToSave.children.push(dataToSave);
  };
</script>

<div class="w-100">
  <h2 style="text-align: center;">Directory Manager</h2>
  <div class="flex space-between">
    <input
      id="input"
      type="text"
      value={input}
      class="input"
      on:change={handleInputChange}
      on:keyup={handleInputChange}
      placeholder="Write Folder or File Name to add"
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
  <div style="display: flex; width: 100%; justify-content: center;">
    <button
      style="padding: 10px 20px; margin: 0.5rem;"
      disabled={!input || !selectedPath.length}
      on:click={handleSubmit}>Save</button
    >
    <button
      style="padding: 10px 20px; margin: 0.5rem;"
      disabled={!input}
      on:click={resetForm}>Cancel</button
    >
  </div>

  {#if isSelectDirectoryModalOpen && input}
    <SelectDirectoryModal
      on:modalClose={toggleSelectDirectoryModalOpen}
      on:resetDropdown={resetDropdown}
    />
  {/if}
  <!-- on:resetSelectedPath={resetSelectedPath} -->
  <!-- on:folder-select={setSelectedPath} -->
  <!-- fileFolderData={directories} -->
  <!-- {selectedPath} -->

  <div class="w-60 m-auto p-30">
    <h3 style="text-align: center;">Data Heirarchy</h3>
    <!-- {#key allDirectoryData} -->
    {#if allDirectoryData?.length}
      <DirectoryTreeView level={baseLevel} {allDirectoryData} />
    {/if}
    <!-- {/key} -->
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

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  .flex {
    display: flex;
  }
  .space-between {
    justify-content: space-between;
  }
  .space-around {
    justify-content: space-around;
  }
  .align-center {
    align-items: center;
  }

  .inline-block {
    display: inline-block;
  }

  .w-100 {
    width: 100%;
  }

  .w-18 {
    width: 18px;
  }

  .w-60 {
    width: 60%;
  }

  .p-30 {
    padding: 30px;
  }

  .h-18 {
    height: 18px;
  }

  .level-0-margin {
    margin-left: 0px;
  }

  .level-1-margin {
    margin-left: 30px;
  }

  .level-2-margin {
    margin-left: 60px;
  }
  .w-60 {
    width: 60%;
  }
  .m-auto {
    margin: auto;
  }
  .mt-2 {
    margin-top: 2rem;
  }
  .mb-2 {
    margin-bottom: 2rem;
  }

  .mr-1 {
    margin-right: 0.5rem;
  }

  .blue-dot {
    width: 18px;
    height: 18px;
    background: blue;
    border-radius: 50%;
    border: white 1px solid;
    cursor: pointer;
    display: inline-block;
  }

  .white-dot {
    width: 18px;
    height: 18px;
    background: gray;
    border: white 1px solid;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
  }

  .text-left {
    text-align: left;
  }

  body {
    margin: 0;
    /* display: flex; */
    /* place-items: center; */
    min-width: 320px;
    min-height: 100vh;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  .card {
    padding: 2em;
  }

  #app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

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
