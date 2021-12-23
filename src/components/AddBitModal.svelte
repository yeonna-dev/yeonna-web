<script>
  import Input from './Input.svelte';
  import Button from './Button.svelte';

  export let onSave = () => {};
  export let onClose = () => {};

  let bit = '';

  const save = () => onSave(bit);
</script>

<div class="bg-bg-light rounded-md">
  <div class="flex justify-between items-center px-5 pt-4">
    <h2 class="text-2xl">Add Bit</h2>
  </div>
  <div class="px-5 py-6">
    <Input
      bind:value={bit}
      placeholder="Enter bit content"
      rows="3"
      autofocus
      multiline
    />
  </div>
  <div class="flex justify-end px-5 pb-4">
    <Button outlined on:click={onClose}>Cancel</Button>
    <Button class="ml-2" on:click={save}>Save</Button>
  </div>
</div>
