<script>
// Import components
import DummyTable from '/LLT/frontend/components/table/Table.vue';
import DummySearchBar from '/LLT/frontend/components/search-bar/SearchBar.vue';

// Import config
import searchBarConfig from './components/dummy-search-bar/config.js'
import tableConfig from './components/dummy-table/config.js';

// Import stores
import { useEventBus } from '/LLT/frontend/stores/event-bus';

export default {
  setup() {
    return {
      tableConfig,
      searchBarConfig
    }
  },
  components: {
    DummyTable,
    DummySearchBar
  },
  mounted() {
    const eventBus = useEventBus();
    eventBus.updateToggleableElements()
  }
}
</script>

<template>
  <section>
    <DummySearchBar
      :config="this.searchBarConfig"
    />
    <DummyTable
      :config="this.tableConfig"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100vw;
  height: 100vh;
}
</style>