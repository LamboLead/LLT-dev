<script>
  export default {
    props: {
      slideNumber: Number
    }
  }
  </script>
  
<template>
  <div
    class="slide"
    :data-slide-number="this.slideNumber" 
  >
    <!-- You can put your information below -->
    <div class="info-container">
      <span class="title">Lorem Ipsum rocks!</span>
      <span class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia vel molestiae necessitatibus porro deserunt obcaecati facilis dignissimos placeat eius eum, ratione tempore doloremque tempora eveniet commodi praesentium. Error qui quos nobis quia vitae facilis. Voluptatum a dolore eaque ut quia?</span>
      <button>Ver más</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide {
  max-width: 100%; // Do not touch this shit
  min-width: 100%; // Do not touch this shit
  height: 100%; // Do not touch this shit
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background: rgb(150, 150, 210);
}
.info-container{
  width: 40%;
  height: fit-content;
  margin-block: 1rem;
  margin-inline: auto 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: white;
  .title {
    font-size: 3rem;
    font-weight: 900;
  }
  .text {
    margin-block-start: 2rem;
    text-align: end;
    font-size: 1.4rem;
  }
}
button {
  width: fit-content;
  height: fit-content;
  padding: 10px 15px;
  margin-top: 3rem;
  border: none;
  border-radius: 0;
  background: black;
  color: white;
  font-size: 1.1rem;
}
</style>