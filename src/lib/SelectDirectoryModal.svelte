<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { each } from "svelte/internal";
  import SelectDirectoryTree from "./SelectDirectoryTree.svelte";
  interface FileFolderCollection {
    type: string;
    name: string;
    path: number[];
    children: FileFolderCollection[];
  }
  export let fileFolderData: FileFolderCollection[] = [];
  export let selectedPath: number[] = [];

  // console.log(fileFolderData);
  // const getDirectories = () => {
  //   const data = localStorage.getItem("file-folder-collection");
  //   if (data) {
  //     fileFolderData = JSON.parse(data);
  //     console.log(fileFolderData);
  //   }
  // };

  const dispatch = createEventDispatcher();
</script>

<div class="modal-container">
  <div id="modal" class="modal text-left">
    <div class="flex space-between align-center">
      <h2>Select Directory</h2>
    </div>

    <!-- {#each fileFolderData as fileFolder, index}
      <div>{fileFolder.name}</div>
    {/each} -->
    <SelectDirectoryTree
      {fileFolderData}
      level={0}
      path={[]}
      {selectedPath}
      on:folder-select
    />
    <div class="mt-2 mb-2 m-auto w-60 flex space-between">
      <button
        disabled={!selectedPath.length}
        on:click={() => dispatch("modalClose")}>Select</button
      >
      <button
        on:click={() => {
          dispatch("resetDropdown");
          dispatch("modalClose");
          dispatch("resetSelectedPath");
        }}>Cancel</button
      >
    </div>
  </div>
</div>

<style>
  .modal-container {
    margin: 0;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    padding: 3rem 5rem;
    min-width: 320px;
    min-height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    box-sizing: border-box;
    background: rgb(0, 0, 0, 0.55);
  }
  .modal {
    width: 60%;
    height: 50%;
    padding: 1rem 2rem;
    border-radius: 15px;
    /* border: 1px solid white;
    background-color: black; */
    background-color: white;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);
  }
</style>
