export default {
  id: 'mainpage-slider',
  slidesFolder: '/src/views/slider/components/slider/slides',
  controls: {
    arrowType: 'DoubleChevron'
  },
  animation: {
    type: 'horizontal',
    defaultDirection: 'rightToLeft'
  },
  slides: [
    {
      fileName: 'Slide1',
      displayTime: 3,
      transition: {
        ease: 'power1.out',
        time: 1
      }
    },
    {
      fileName: 'Slide2',
      displayTime: 3,
      transition: {
        ease: 'power3.out',
        time: 1
      }
    },
    {
      fileName: 'Slide3',
      displayTime: 3,
      transition: {
        ease: 'power2.out',
        time: 1
      }
    }
  ]
}