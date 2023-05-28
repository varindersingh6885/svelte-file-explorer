<script lang="ts">
  import { children } from "svelte/internal";
  import { createEventDispatcher } from "svelte";

  interface FileFolderCollection {
    type: string;
    name: string;
    path: number[];
    children: FileFolderCollection[];
  }
  export let fileFolderData: FileFolderCollection[] = [];
  export let level;
  export let path: number[] = [];
  export let selectedPath: number[] = [];

  console.log(path);
  // console.log(selectedPath);
  const dispatch = createEventDispatcher();

  // filter only folders
  const folders = fileFolderData;
  // .filter((item) => {
  //   return item.type === "folder";
  // });
  console.log(folders);
  const selectFolder = (path) => {
    // console.log([...path, index]);
    dispatch("folder-select", { path });
    // console.log(selectedPath)
  };

  const isSelected = (path1, path2): boolean => {
    // console.log(folder);
    // console.log(path1, path2);
    if (path1.length !== path2.length) return false;
    for (let i = 0; i < path1.length; i++) {
      if (path1[i] !== path2[i]) return false;
    }
    console.log(true, selectedPath);
    return true;
  };
</script>

<!-- <div> -->
{#if level < 2}
  {#each folders as folder, index}
    <!-- <div> -->
    <!-- <div class={`level-${folder.path.length - 1}-margin`}> -->
    <div class="m-auto w-60">
      <div class="flex space-between">
        <div>
          {#each folder.path.filter((item, index) => index > 0) as item, index}
            <span class="level-1-margin" />
          {/each}
          <span>|--</span>
          {folder.name}
        </div>
        {#if isSelected(selectedPath, folder.path)}
          <div class="blue-dot" on:click={() => selectFolder(folder.path)} />
          <!-- <button on:click={() => selectFolder(folder.path)}>
            <div>
              O
              <div />
            </div></button
          > -->
        {:else}
          <div class="white-dot" on:click={() => selectFolder(folder.path)} />
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
{/if}
<!-- </div> -->
