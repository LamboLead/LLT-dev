<script>

// Import components
import Slider from '/LLT/frontend/components/slider/Slider.vue';

// Import config
import sliderConfig from './components/slider/config.js';

export default {
  setup() {
    return {
      sliderConfig
    }
  },
  components: {
    Slider
  }
}
</script>

<template>
  <section>
		<Slider :config="this.sliderConfig"/>
  </section>
</template>

<style lang="scss" scoped>
section {
  position: relative;
  width: 100%;
  height: $sectionHeight;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>