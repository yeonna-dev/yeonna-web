<script>
  import { onMount } from 'svelte';

  import classNames from 'classnames';

  import Loader from './Loader.svelte';

  import { isURL } from '$lib/helpers';
  import { MediaTypes, getMediaType } from '$lib/mediaType';

  export let imageClass = '';
  export let textClass = '';
  export let content = '';
  export let loading = isURL(content);

  let type = MediaTypes.TEXT;

  onMount(async () => {
    if (!loading) return;
    loading = true;
    type = await getMediaType(content);
    loading = false;
  });
</script>

{#if loading}
  <Loader />
{:else if type === MediaTypes.IMAGE}
  <img
    class={classNames('bit', imageClass)}
    src={content}
    alt="media content"
  />
{:else}
  <div class={classNames('bit overflow-hidden overflow-ellipsis', textClass)}>
    {content}
  </div>
{/if}
