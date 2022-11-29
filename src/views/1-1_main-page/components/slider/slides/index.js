// import mainPageSliderConfig from '/src/config/mainpage-slider/config.js';

/* 
You need to find a way to import the slides depending on the folder of the slides and their id. That cannot be hard-coded like this example
*/

/*
import Slide1 from `${mainPageSliderConfig.slidesFolder}/Slide-1.vue`;
import Slide2 from `${mainPageSliderConfig.slidesFolder}/Slide-2.vue`;
import Slide3 from `${mainPageSliderConfig.slidesFolder}/Slide-3.vue`;

const registerSlides = (app) => {
  app.component(`${mainPageSliderConfig.id}-1`, Slide1)
  app.component(`${mainPageSliderConfig.id}-2`, Slide2)
  app.component(`${mainPageSliderConfig.id}-3`, Slide3)
}
*/
import Slide1 from './Slide-1.vue';
import Slide2 from './Slide-2.vue';
import Slide3 from './Slide-3.vue';

const registerSlides = (app) => {
  app.component('Slide1', Slide1)
  .component('Slide2', Slide2)
  .component('Slide3', Slide3);
}

export default registerSlides;