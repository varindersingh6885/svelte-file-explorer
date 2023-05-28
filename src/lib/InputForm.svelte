<script lang="ts">
  import SelectDirectoryModal from "./SelectDirectoryModal.svelte";

  let input = "";
  let inputType = "file";
  let isSelectDirectoryModalOpen = false;

  const toggleSelectDirectoryModalOpen = () => {
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
</script>

<div>
  <div>
    <input id="input" type="text" value={input} on:change={handleInputChange} />
  </div>
  <div>
    <select
      name="input_type"
      id="input_type"
      on:change={handleDropdownValueChange}
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
    <SelectDirectoryModal on:modalClose={toggleSelectDirectoryModalOpen} />
  {/if}
</div>
