<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<div id="modal" class="modal">
  <h2>
    Select Directory <button on:click={() => dispatch("modalClose")}
      >Close</button
    >
  </h2>

  <button>Save</button>
  <button on:click={() => dispatch("modalClose")}>Cancel</button>
</div>

<style>
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
</style>
