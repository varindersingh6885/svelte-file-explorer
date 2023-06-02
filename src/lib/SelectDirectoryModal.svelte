<svelte:options tag="select-directory-modal" />

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import SelectDirectoryTree from "./SelectDirectoryTree.svelte";
  import { selectedPathStore } from "./stores";

  let selectedPath: number[] = [];

  selectedPathStore.subscribe((value) => {
    selectedPath = value;
  });

  const dispatch = createEventDispatcher();
</script>

<div
  class="modal-container"
  style="margin: 0; display: flex; justify-content: center; /* align-items: center; */ padding: 3rem 5rem; min-width: 320px; min-height: 100vh; width: 100%; position: absolute; top: 0; left: 0; z-index: 10; box-sizing: border-box; background: rgb(0, 0, 0, 0.55);"
>
  <div
    id="modal"
    class="modal text-left"
    style="width: 60%; height: 50%; padding: 1rem 2rem; border-radius: 15px; /* border: 1px solid white; background-color: black; */ background-color: white; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);"
  >
    <div class="flex space-between align-center">
      <h2 style="text-align: center; width: 100%">Select Directory</h2>
    </div>

    <div style="padding: 1rem;">
      <SelectDirectoryTree />
    </div>
    <div class="mt-2 mb-2 m-auto w-60 flex space-between">
      <button
        style="padding: 10px 20px; margin: 0.5rem;"
        disabled={!selectedPath.length}
        on:click={() => dispatch("modalClose")}>Select</button
      >
      <button
        style="padding: 10px 20px; margin: 0.5rem;"
        on:click={() => {
          dispatch("resetDropdown");
          dispatch("modalClose");
          selectedPathStore.set([]);
        }}>Cancel</button
      >
    </div>
  </div>
</div>
