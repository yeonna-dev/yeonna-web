<script>
  import classNames from 'classnames';

  export let value = '';
  export let multiline = false;

  let attributes = {
    ...$$props,
    class: classNames(
      'w-full rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-primary focus:border-primary transition',
      { multiline }
    ),
  };
</script>

{#if multiline}
  <textarea bind:value {...attributes} />
{:else}
  <input bind:value {...attributes} />
{/if}

<style>
  .multiline {
    min-height: 2.5rem;
  }
</style>
