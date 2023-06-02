<svelte:options tag="select-directory" />

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { directoryStore, selectedPathStore } from "./stores";
  import { getAllDirectoriesTillLevel2 } from "./utils";

  interface FileFolderCollection {
    type: string;
    name: string;
    path: number[];
    children: FileFolderCollection[];
  }
  // export let fileFolderData: FileFolderCollection[] = [];
  // export let level;
  // export let path: number[] = [];
  let selectedPath: number[] = [];

  let directoriesTillLevel2 = [];

  directoryStore.subscribe((value) => {
    directoriesTillLevel2 = getAllDirectoriesTillLevel2(value, 0);
  });

  selectedPathStore.subscribe((value) => {
    selectedPath = value;
  });

  // let getAllDirectoriesTillLevel2 = (fileFolderData, lvl) => {
  //   let arr = [];
  //   if (lvl >= 2) return arr;
  //   fileFolderData.forEach((item) => {
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

  // const getAllDirectories = () => {
  //   let dataStorage = localStorage.getItem("file-folder-collection");
  //   if (dataStorage) {
  //     return JSON.parse(dataStorage);
  //   }
  // };

  // const directories = getAllDirectoriesTillLevel2(getAllDirectories(), 0);

  // const dispatch = createEventDispatcher();

  // filter only folders
  // const folders = fileFolderData;
  // .filter((item) => {
  //   return item.type === "folder";
  // });
  const selectFolder = (path) => {
    // dispatch("folder-select", { path });
    selectedPathStore.set(path);
  };

  const isSelected = (path1, path2): boolean => {
    if (path1.length !== path2.length) return false;
    for (let i = 0; i < path1.length; i++) {
      if (path1[i] !== path2[i]) return false;
    }
    return true;
  };
</script>

<!-- <div> -->
<!-- {#if level < 2} -->
{#each directoriesTillLevel2 as folder, index}
  <!-- <div> -->
  <!-- <div class={`level-${folder.path.length - 1}-margin`}> -->
  <div class="m-auto w-60">
    <div class="flex space-between" style="margin-bottom: 0.5rem;">
      <div>
        <div class={`level-${folder.path.length - 1}-margin flex align-center`}>
          <!-- <div> -->
          {#each folder.path as path}
            <span class="mr-1">&nbsp; &nbsp; &nbsp;</span>
          {/each}
          <span class="mr-1">|-- </span>
          <!-- <div class="inline-block w-18 mr-1"> -->
          <div class="h-18 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="18"
              height="18"
              viewBox="0 0 256 256"
              xml:space="preserve"
            >
              <defs />
              <g
                style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <path
                  d="M 73.538 35.162 l -52.548 1.952 c -1.739 0 -2.753 0.651 -3.232 2.323 L 6.85 76.754 c -0.451 1.586 -2.613 2.328 -4.117 2.328 h 0 C 1.23 79.082 0 77.852 0 76.349 l 0 -10.458 V 23.046 v -2.047 v -6.273 c 0 -2.103 1.705 -3.808 3.808 -3.808 h 27.056 c 1.01 0 1.978 0.401 2.692 1.115 l 7.85 7.85 c 0.714 0.714 1.683 1.115 2.692 1.115 H 69.73 c 2.103 0 3.808 1.705 3.808 3.808 v 1.301 C 73.538 26.106 73.538 35.162 73.538 35.162 z"
                  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(224,173,49); fill-rule: nonzero; opacity: 1;"
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
                <path
                  d="M 2.733 79.082 L 2.733 79.082 c 1.503 0 2.282 -1.147 2.733 -2.733 l 10.996 -38.362 c 0.479 -1.672 2.008 -2.824 3.748 -2.824 h 67.379 c 1.609 0 2.765 1.546 2.311 3.09 L 79.004 75.279 c -0.492 1.751 -1.571 3.818 -3.803 3.803 C 75.201 79.082 2.733 79.082 2.733 79.082 z"
                  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,200,67); fill-rule: nonzero; opacity: 1;"
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </div>
          <!-- </div> -->
          <span>
            {`  ${folder.name}`}
          </span>
        </div>
      </div>
      {#if isSelected(selectedPath, folder.path)}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          on:click={() => selectFolder(folder.path)}
          class="blue-dot"
          style="width: 18px;
            height: 18px;
            background: blue;
            border-radius: 50%;
            border: white 1px solid;
            cursor: pointer;
            display: inline-block;"
        />
        <!-- <button on:click={() => selectFolder(folder.path)}>
            <div>
              O
              <div />
            </div></button
          > -->
      {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          on:click={() => selectFolder(folder.path)}
          class="white-dot"
          style="width: 18px;
              height: 18px;
              background: gray;
              border: white 1px solid;
              border-radius: 50%;
              cursor: pointer;
              display: inline-block;"
        />
        <!-- <button on:click={() => selectFolder(folder.path)}> select </button> -->
      {/if}
    </div>
  </div>
  <!-- {#if folder.children.length}
      <svelte:self
        fileFolderData={[...folder.children]}
        level={level + 1}
        path={[...path, index]}
        on:folder-select
      />
    {/if} -->
  <!-- </div> -->
{/each}
<!-- {/if} -->
<!-- </div> -->
