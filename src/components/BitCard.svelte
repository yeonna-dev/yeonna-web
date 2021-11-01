<script>
  import { onMount } from 'svelte';
  import shave from 'shave';

  import Bit from './Bit.svelte';

  export let content;

  onMount(async () => shave('.content', 110));
</script>

<div
  class="bit-card bg-bg-light shadow-md rounded-md cursor-pointer hover:shadow-xl hover:scale-105 transition-shadow transition-transform overflow-hidden m-4"
  on:click
>
  <div class="h-full grid place-items-center">
    <Bit textClass="content p-4" {content} />
  </div>
</div>

<style lang="scss">
  .bit-card {
    max-width: 20rem;
    max-height: 10rem;

    :global(img.bit) {
      max-height: 10rem;
    }
  }
</style>
