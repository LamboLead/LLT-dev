export default {
	id: 'dummy-carousel',
	// autoSlide: true,
	// arrowType: 'hpta',
	template: 'DummyCarouselElement',
	arrows: false,
	indicators: false,
	animation: {
		// ease: 'none', // Defines the easing between each transition
		// infinite: true, // Allows the carousel to be slided indefinitely
		type: 'fluid',
		defaultDirection: 'forward',
		transitionTime: 0.5, // Time that the transition takes to complete
		displayTime: 15 // Time that the element is displayed at the center
	}
}