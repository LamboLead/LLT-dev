<script>
import {RouterLink} from 'vue-router';

export default {
  components: {RouterLink},
  data() {
    return {
      currentLink: undefined
    }
  },
  methods: {
    moveBackground(event) {
      let element = event.target;
      let vPortHeight = window.innerHeight;
      let elemPosition = Math.floor(element.getBoundingClientRect().top);
      let elemHeight = element.offsetHeight;

      let cont1 = this.$refs.cont1;
      let gap = this.$refs.gap;
      let cont2 = this.$refs.cont2;
      gsap.to(cont1, {height: elemPosition});
      gsap.to(gap, {height: elemHeight});
      gsap.to(cont2, {height: vPortHeight - elemHeight - elemPosition});

      function moveNavbarBackground(selector) {
        let element = document.querySelector(`[data-navigation-section=${selector}]`);


        let gap = document.querySelector("#gap");
        if (selector === "main-page") {
          gap.classList.remove("gap-background");
        } else {
          gap.classList.add("gap-background");
        }
      }
    }
  },
  mounted() {
    return true;
  }
}
  /*
// - - - Navigation with navbar - - -

// Basic anchor navigation
const links = document.querySelectorAll("#logo,#index .link");
moveNavbarBackground("main-page");

let pinTrig = ScrollTrigger.getById("about-me-pin");
let snapTrig = ["main-page", "about-me", "my-portfolio", "contact"];

// When user clicks on the link from navbar, it scrolls to the corresponding section, while disabling temporarily the corresponding ScrollTrigger instance when navigating navbar to avoid massive epylepsia
links.forEach((link) => {
  link.addEventListener("click", () => {
    let sectionId = link.getAttribute("data-navigation-section");
    moveNavbarBackground(sectionId);

    snapTrig.forEach((id) => ScrollTrigger.getById(id).disable(false, false));
    // console.log("Scrollers disabled");
    pinTrig.disable();
    
    gsap.to(window, {
      // scrollTo: {y: `#${sectionId}`, autoKill: false}, what does autokill do?
      scrollTo: {y: `#${sectionId}`},
      duration: snapDuration - 0.2
    });
    
    setTimeout(() => {
      pinTrig.enable(false, true);
      snapTrig.forEach((id) => ScrollTrigger.getById(id).enable(false, false));
      // console.log("Scrollers enabled!");
    }, snapTrig * 1000);

  });
});

function moveNavbarBackground(selector) {
  let vPortHeight = window.innerHeight;
  let element = document.querySelector(`[data-navigation-section=${selector}]`);
  let elemPosition = Math.floor(element.getBoundingClientRect().top);
  let elemHeight = element.offsetHeight + 5;

  gsap.to("#container1", {height: elemPosition});
  gsap.to("#gap", {height: elemHeight});
  gsap.to("#container2", {height: vPortHeight - elemHeight - elemPosition});

  let gap = document.querySelector("#gap");
  if (selector === "main-page") {
    gap.classList.remove("gap-background");
  } else {
    gap.classList.add("gap-background");
  }
}
*/
// - - - Mobile navbar - - -

/**
 * Some thoughts...
 * -> When the user clicks out of the navbar, close it. If it scrolls to other section of the page, wait some time and then close it.
 * -> Create a small-animated logo to encourage users to use your navbar.
 */
/*
const navbarTab = document.getElementById("navbar-tab");
const navbar = document.getElementById("navbar");
const body = document.querySelector("body");
const blackener = document.getElementById("blackener");

blackener.addEventListener("click", () => {
  navbarTab.click();
});

navbarTab.addEventListener("click", () => {
  if (navbar.classList.contains("is-navbar-expanded")) {
    navbar.classList.remove("is-navbar-expanded");
    body.classList.remove("is-scrolling-disabled");
    blackener.classList.remove("is-blackener-enabled");
    return;
  }
  navbar.classList.add("is-navbar-expanded");
  body.classList.add("is-scrolling-disabled");
  blackener.classList.add("is-blackener-enabled");
});
*/
</script>

<template>
  <nav>
    <RouterLink to="/iniciar-sesion" class="logo" @click="(e) => this.moveBackground(e)">

    </RouterLink>

    <div class="index">
      <RouterLink to="/admin/solicitudes" class="link" @click="(e) => this.moveBackground(e)">Solicitudes</RouterLink>
      <span class="link" @click="(e) => this.moveBackground(e)">B</span>
      <span class="link" @click="(e) => this.moveBackground(e)">C</span>
      <span class="link" @click="(e) => this.moveBackground(e)">D</span>
      <span class="link" @click="(e) => this.moveBackground(e)">E</span>
      <!-- Different links -->
      <!-- <RouterLink class="link" to="/admin/solicitudes" @click="(e) => this.moveBackground(e)">Solicitudes</RouterLink>
      <RouterLink class="link" to="/admin/proyectos" @click="(e) => this.moveBackground(e)">Proyectos</RouterLink>
      <RouterLink class="link" to="/admin/miembros" @click="(e) => this.moveBackground(e)">Eventos</RouterLink>
      <RouterLink class="link" to="/admin/miembros" @click="(e) => this.moveBackground(e)">Miembros</RouterLink> -->
    </div>

    <!-- To add different stuff if you need it -->
    <slot></slot>

    <div class="navbar-background">
      <div ref="cont1" class="container1 navbar-container"></div>
      <div ref="gap" class="gap gap-background"></div>
      <div ref="cont2" class="container2 navbar-container"></div>
    </div>

    <div class ="navbar-tab">
      <!-- SVG: #navbar-tab (navbar-logos/navbar-tab.svg) -->
    </div>
  </nav>
  <div class="spacer"></div>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 3;
  @include screen-width($phone...) {
    width: clamp(0px, 65%, 350px);
    transform: translateX(-100%);
  }
  @include screen-width($laptop...) {
    width: 20vw;
  }
  @include screen-width($desktop...) {
    width: 20vw;
  }
}

.logo {
  width: 100%;
  height: 15vh;
  margin-bottom: 10%;
  @include screen-width($phone...) {
    transform: translateX(85%);
    transition: transform 400ms ease-out;
  }
}

.index {
  width: 95%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .link {
    width: 100%;
    height: fit-content;
    // margin-top: 0.6rem;
    padding: 15px 2ch;
    font-size: clamp(1rem, 2.5vh, 2rem);
    font-weight: bolder;
    color: $mainColor;
    border-bottom: 1px solid $leastDarkShade;
  }
}

.navbar-background {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .navbar-container {
    background: white;
    width: 100%;
  }
  .container1 {
    height: 0;
    border-bottom-right-radius: 10px;
  }
  .container2 {
    height: 80%;
    border-top-right-radius: 10px;
  }
  // .gap {
  //   width: 100%;
  //   height: 20%;
  //   transition: background 400ms ease-out;
  // }
  .gap-background {
    @include screen-width($phone...) {
      background: linear-gradient(90deg, $mainColor 85%, $mainColor 100%);
    }
  }
}

.navbar-tab {
  position: absolute;
  top: 50%;
  left: 100%;
  width: 1.5rem;
  height: 10vh;
  background: $mainColor;
  border-radius: 0 5px 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @include screen-width($laptop...) {
    display: none;
  }
}
.spacer {
  position: relative;
  height: 100vh;
  background: $leastDarkShade;
  @include screen-width($phone...) {
    display: none;
  }
  @include screen-width($laptop...) {
    min-width: 20vw;
  }
}
</style>