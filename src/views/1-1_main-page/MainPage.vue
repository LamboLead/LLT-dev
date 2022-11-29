<script>

// Import components
import Slider from '/LLT/frontend/components/slider/Slider.vue';
import WorkLines from './components/WorkLines.vue';
import WorkedWith from './components/WorkedWith.vue';
import ContactForm from '/LLT/frontend/components/form/Form.vue';

// Import config
import sliderConfig from './components/slider/config.js';
import formConfig from './components/contact-form/config.js';

/**
 * Main Page view.
 * <br>Purpose: To serve as the main page for STEM.
 * @displayName Main Page
 */
export default {
  setup() {
    return {
      sliderConfig: sliderConfig,
      formConfig: formConfig
    }
  },
  components: {
    Slider,
    WorkLines,
    WorkedWith,
    ContactForm
  }
}
</script>

<template>
  <section>
    <Slider
      :config="this.sliderConfig"
    />
    <WorkLines/>
    <WorkedWith/>
    <div class="separator"></div>
    <ContactForm
      :config="this.formConfig"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.separator {
  width: 100%;
  height: 10vh;
  border: 2px solid black;
}
</style>