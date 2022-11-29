<script>
export default {
  setup() {
    
  },
}
</script>

<template>
  <div id="workedWith">
    <span class="title">Hemos trabajado con:</span>
    <div class="logo-container">
      <div class="logo">A</div>
      <div class="logo">B</div>
      <div class="logo">C</div>
      <div class="logo">D</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#workedWith {
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  display: block;
  width: 90%;
  height: 20%;
  font-weight: 800;
  font-size: 2rem;
  border: 2px solid blue;
}
.logo-container{
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid red;
  .logo {
    height: 60%;
    width: auto;
    aspect-ratio: 1/1;
    margin-inline: 5%;
  }
}
</style>