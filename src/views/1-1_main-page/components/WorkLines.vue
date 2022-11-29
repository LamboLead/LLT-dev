<script></script>

<template>
  <div id="workLines">
    <span class="title">Nuestras líneas de trabajo:</span>
    <div class="container">
      
      <div class="line-container transition">
        <div class="line-content">
          <span class="line-title">Transición Energética</span>
          <span class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nostrum? Ab ea non minima, recusandae debitis fugit rerum nobis exercitationem rem, fuga consectetur magni quam sit? Quisquam id fugit voluptatem.</span>
          <button>Ver más</button>
        </div>
        <div class="animation"></div>
      </div>
  
      <div class="line-container generation">
        <div class="line-content">
          <span class="line-title">Microcogeneración</span>
          <span class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam error autem deserunt, eos, sunt recusandae animi expedita incidunt repellat officiis deleniti tempora molestias porro illo eligendi perspiciatis adipisci laboriosam odit!</span>
          <button>Ver más</button>
        </div>
        <div class="animation"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

#workLines {
  width: 100%;
  height: 88vh;
  border: 2px solid red;
  @include screen-width($phone...){
    height: 100vh;
  }
}
.title {
  display: block;
  width: fit-content;
  height: 15%;
  margin-inline: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  border: 2px solid black;
}
.container {
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @include screen-width($phone...){
    flex-direction: column;
  }
}
.line-container {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  border: 2px solid red;
  @include screen-width($phone...){
    width: 90%;
  }
  .line-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .line-title {
      display: block;
      font-weight: 700;
      font-size: 2.5rem;
    }
    .info {
      display: block;
    }
  }
}
.transition {
  justify-content: flex-end;
  .line-content {
    margin: 5%;
    width: 45%;
    height: 75%;
    @include screen-width($phone...){
      width: 90%;
    }
  }
}
.generation {
  .line-content {
    width: 85%;
    height: 50%;
    margin: 5%;
    @include screen-width($phone...){
      width: 90%;
    }
  }
}

.animation {
  @include screen-width($phone...){
    
  }
}
</style>