<script setup>
import {RouterLink, RouterView} from 'vue-router';
</script>

<template>
  <footer>
    <div class="footer-container links">
      <RouterLink to="">¿Quiénes somos?</RouterLink>
      <RouterLink to="">Haz parte del semillero</RouterLink>
      <RouterLink to="">Propón un proyecto</RouterLink>
      <RouterLink to="">Blog</RouterLink>
      <div class="privacy-terms">
        <a href="http://stem.com/legal/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">Términos y condiciones</a>
        <a href="http://stem.com/legal/politica-de-privacidad" target="_blank" rel="noopener noreferrer">Política de privacidad</a>
      </div>
    </div>
    <div class="footer-container info">
      <div class="logo"></div>
      <span>&copy; ^2022^ Semillero de Transición Energética y Microcogeneración</span>
      <span>Sitio web desarrollado por <a href="https://lambolead.com">LamboLead Tech</a></span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>

footer {
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid red;
  @include screen-width($phone...){
      flex-direction: column;
  }
}
.footer-container {
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 2px solid blue;
}
.links {
  width: 35%;
  align-items: flex-start;
  .privacy-terms {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    @include screen-width($phone...){
      align-items: center;
    }
  }
  @include screen-width($phone...){
    width: 90%;
    align-items: center;
  }
}
.info {
  width: 55%;
  align-items: flex-end;
  border-left: 2px solid black;
  @include screen-width($phone...){
    width: 80%;
    border-left: 0px;
    border-top: 2px solid black;
  }
}
.logo {
  width: 70%;
  height: 45%;
  align-self: center;
  border: 2px solid lightblue;
}
</style>