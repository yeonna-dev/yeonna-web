<script>
  import Bits from '../views/Bits.svelte';

  import Button from '../components/Button.svelte';
  import Header from '../components/Header.svelte';
  import Overlay from '../components/Overlay.svelte';
  import BitModal from '../components/BitModal.svelte';
  import AddBitModal from '../components/AddBitModal.svelte';

  let clickedBitContent;
  let bitModal, addBitModal;

  const onClickBit = (content) => {
    bitModal.show();
    clickedBitContent = content;
  };

  const onClickAddModal = () => addBitModal.show();
  const onCloseAddModal = () => addBitModal.hide();
</script>

<Header />
<Bits {onClickBit} />
<Button class="fixed bottom-0 right-0" fab on:click={onClickAddModal}>+</Button>

<Overlay bind:this={bitModal} contentClass="bit-modal-content" withCloseButton>
  <BitModal content={clickedBitContent} />
</Overlay>

<Overlay bind:this={addBitModal} contentClass="w-10/12 sm:w-2/3 md:w-1/2">
  <AddBitModal onSave={(bit) => alert(bit)} onClose={onCloseAddModal} />
</Overlay>

<style>
  :global(.bit-modal-content) {
    max-width: 90%;
  }
</style>
