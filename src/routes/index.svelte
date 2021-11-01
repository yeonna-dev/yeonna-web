<script>
  import Bits from '../views/Bits.svelte';

  import FAB from '../components/FAB.svelte';
  import Header from '../components/Header.svelte';
  import BitModal from '../components/BitModal.svelte';

  let clickedBitContent;
  let modalShown = false;

  const onClickBit = (content) => {
    modalShown = true;
    clickedBitContent = content;
  };
</script>

<Header />
<Bits {onClickBit} />
<FAB />
<BitModal bind:shown={modalShown} content={clickedBitContent} />
