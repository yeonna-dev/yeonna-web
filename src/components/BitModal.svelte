<script>
  import Bit from '../components/Bit.svelte';

  export let content;
</script>

{#if content}
  <Bit textClass="bittext-xl bg-bg-light shadow-xl rounded-md p-10" {content} />
{/if}
