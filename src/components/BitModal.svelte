<script>
  import Overlay from '../components/Overlay.svelte';
  import Bit from '../components/Bit.svelte';

  export let content;
  export let shown = false;
</script>

{#if content}
  <Overlay bind:shown contentClass="bit-modal-content" withCloseButton>
    <Bit
      textClass="bittext-xl bg-bg-light shadow-xl rounded-md p-10"
      {content}
    />
  </Overlay>
{/if}

<style>
  :global(.bit-modal-content) {
    max-width: 90%;
  }
</style>
