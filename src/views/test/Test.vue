<script>
import { useEventBus } from '/LLT/frontend/stores/event-bus.js';

// Import component
// import TestSearchBar from '/LLT/development/frontend/components/search-bar/SearchBar.vue';
import ContactForm from '/LLT/frontend/components/form/Form.vue';
import VerticalCards from '/LLT/frontend/components/vertical-cards/VerticalCards.vue';

// Import configuration
import searchConfig from './components/search-bar/config.js';
import formConfig from './components/contact-form/config.js';
import cardsConfig from './components/vertical-cards/config.js';

export default {
  setup() {
    return {
      searchConfig,
      formConfig,
      cardsConfig
    }
  },
  components: {
    // TestSearchBar,
    ContactForm,
    VerticalCards
  },
  mounted() {
    let eventBus = useEventBus();
    eventBus.updateToggleableElements();
  }
}

</script>

<template>
<section>
  <!-- <TestSearchBar :config="this.searchConfig"/> -->
  <!-- <ContactForm :config="this.formConfig"/> -->
  <VerticalCards :config="this.cardsConfig"/>
</section>
</template>

<style>
section {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
}
</style>