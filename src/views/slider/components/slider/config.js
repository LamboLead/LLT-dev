export default {
  id: 'mainpage-slider',
  slidesFolder: '/src/views/slider/components/slider/slides',
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
        ease: 'expo.out',
        time: 0.7
      }
    },
    {
      fileName: 'Slide3',
      displayTime: 3,
      transition: {
        ease: 'Elastic.easeOut',
        time: 1.2
      }
    }
  ]
}