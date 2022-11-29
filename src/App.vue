<script>
/**
 * Where everything starts
 * @displayName App
 * @author Juan David López López
 * @version 1.0
 */
// Import components
import {RouterLink, RouterView} from 'vue-router';
import Navbar from './components/shared/Navbar.vue';
import Footer from './components/shared/Footer.vue';

// Import stores
import { useEventBus } from '/LLT/frontend/stores/event-bus.js';

export default {
  components: {
    Navbar,
    Footer,
    RouterView
  },
  mounted() {
    let eventBus = useEventBus();
    // Set up keyboard events
    document.addEventListener('keyup', (event) => {
      eventBus.keyboardEvent(event.code);
    });
    // Set up click-outside events
    document.addEventListener('click', (event) => {
      eventBus.toggleElement(event.target);
    })
  }
}
</script>

<template>
  <Navbar/>
  <RouterView />
  <!-- <Footer/> -->
</template>

<style lang="scss">
* {
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: normal;
}

:root {
  font-family: 'Lato', sans-serif;
  scrollbar-width: none;
  @include screen-width($phone...) {
    font-size: 12px;
  }
  @include screen-width($laptop...) {
    font-size: 14px;
  }
  @include screen-width($desktop...) {
    font-size: 16px;
  }
}
body {
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0px;
  }
}
#app {
  position: relative;
  width: 100vw;
  height: fit-content;
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
}

a.router-link-active, a {
  color: black;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
}
input, textarea {
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
}
</style>