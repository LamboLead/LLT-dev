export default {
	id: 'dummy-carousel',
	autoSlide: true,
	arrowType: 'hpta',
	animation: {
		infinite: true, // Allows the carousel to be slided indefinitely
		animationType: 'power.out', // Defines the animation type between each transition
		timeToCompletion: 6 // Total time to pass the carousel
	},
	elements: [
		{
			id: 1,
			displayTime: 4
		},
		{
			id: 2,
			displayTime: 5
		},
		{
			id: 3,
			displayTime: 6
		}
	]
}