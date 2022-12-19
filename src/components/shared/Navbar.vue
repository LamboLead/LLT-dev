<script >
import {RouterLink} from 'vue-router';

export default {
  components: {
    RouterLink
  }
}
</script>

<template>
  <nav>
    <RouterLink to="/" class="logo">
      <!-- <img src="../assets/logo.svg" alt=""> -->
    </RouterLink>
    <div class="nav-container">
      <RouterLink to="/slider">Slider</RouterLink>
    </div>
  </nav>
  <div class="spacer"></div>
</template>

<style lang="scss" scoped>

nav {
  position: fixed;
  width: 100%;
  height: $navbarHeight;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 30;
  border-bottom: 1px solid $lightBorderColor;
}
.spacer {
  position: relative;
  width: 100%;
  height: $navbarHeight;
}
.logo {
  position: relative;
  width: 7%;
  height: 80%;
  display: block;
  margin-inline: 5%;
  border: 2px solid yellow;
}
.nav-container {
  width: 85%;
  height: 100%;
  margin-inline-end: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>