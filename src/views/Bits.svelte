<script>
  import BitCard from '../components/BitCard.svelte';

  import { sentence } from '$lib/helpers';

  export let onClickBit;

  const contents = [
    ...[...Array(3).keys()].map(() => sentence()),
    'https://i.pinimg.com/736x/ca/24/bb/ca24bbd52639669e6b4e338cf9fa9ad6.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif',
    'hello world',
    'https://images2.alphacoders.com/100/1003880.png',
  ];
</script>

<div class="flex flex-wrap justify-center py-6">
  {#each contents as content}
    <BitCard {content} on:click={() => onClickBit(content)} />
  {/each}
</div>
