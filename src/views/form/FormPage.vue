<script>

// Import components
import ContactForm from '/LLT/frontend/components/form/Form.vue';

// Import config
import formConfig from './components/contact-form/config.js';

export default {
  setup() {
    return {
      formConfig: formConfig
    }
  },
  components: {
    ContactForm
  }
}
</script>

<template>
  <section>
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
</style>