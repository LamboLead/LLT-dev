<script>
// Import components
import DummyCarousel from '/LLT/frontend/components/carousel/Carousel.vue';
// Import config
import carouselConfig from './components/carousel/config.js';

export default {
	setup() {
		return {carouselConfig}
	},
	components: {
		DummyCarousel
	}
}
</script>

<template>
	<section>
		<DummyCarousel :config="this.carouselConfig">
			<div class="element"
				v-for="elem in this.carouselConfig.elements"
				:key="elem.id"
				:config="elem"
			>
				<div class="image">imagen tal</div>
				<span class="title">Goddammit</span>
				<span class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, beatae.</span>
			</div>
		</DummyCarousel>
	</section>
</template>

<style lang="scss" scoped>
section {
	width: 100vw;
	height: 100vh;
	background: $leastDarkShade;
}

.element {
	min-width: 15rem;
	height: 100%;
	border: 1px solid red;
	margin-inline: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	.image {
		width: 50%;
		aspect-ratio: 1/1;
		border-radius: 50%;
		border: 1px solid red;
	}
	.title {
		font-size: 2rem;
		font-weight: bolder;
	}
	
}
</style>