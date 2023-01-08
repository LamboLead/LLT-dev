<script>
// Import components
import DummyCarousel from '/LLT/frontend/components/carousel/Carousel.vue';
import CarouselElement from './components/carousel/CarouselElement.vue';
// Import config
import carouselConfig from './components/carousel/config.js';
// Import info
import carouselInfo from './components/carousel/db.json';

export default {
	setup() {
		// let standardInfo = JSON.parse(carouselInfo);
		return {
			carouselConfig,
			carouselInfo
		}
	},
	components: {
		DummyCarousel,
		CarouselElement
	}
}
</script>

<template>
	<section>
		<DummyCarousel :config="this.carouselConfig" :info="this.carouselInfo"/>
	</section>
</template>

<style lang="scss" scoped>
section {
	width: 100vw;
	height: 88vh;
	@include flex-container(column, center, center);
}
</style>