<script>
  import classNames from 'classnames';

  export let fab = false;
  export let outlined = false;
</script>

<button
  class={classNames(
    'focus:outline-none focus:ring transition',
    outlined
      ? 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white'
      : 'bg-primary hover:bg-primary-hover',
    fab
      ? 'w-16 h-16 grid place-items-center rounded-full text-5xl shadow-xl m-12'
      : 'rounded-lg font-bold px-4 py-2',
    $$props.class
  )}
  on:click
>
  <slot />
</button>
