module.exports = {
  title: 'STEM documentation',
	version: '1.1.1',
  pagePerSection: true,
  sections: [
    {
      name: 'LamboLead Tech Library',
      description: 'Welcome to LamboLead Tech\'s library of reusable components. This sections (hopefully) contains all the details on how to implement these components in present and future projects.<br>To work, these components need to have a JavaScript configuration object and a SCSS stylesheet associated with them. The implementation details are described more thoroughly inside of the docs for each component.',
      sectionDepth: 2,
      sections: [
        {
          name: 'Table',
          description: 'This library contains all the components you need to deploy a fully-customizable table functionality to render information from an SQL database. This table can also be integrated with a searchbar.',
          components: './src/components/LamboLead-Tech-Library/table/*.vue'
        },
        {
          name: 'Search bar',
          description: 'This library contains all the components you need to deploy a basic searchbar functionality. It works along (many other components) a Table component to render information depending on the output of the attached searchbar.',
          components: './src/components/LamboLead-Tech-Library/search-bar/*.vue'
        },
        {
          name: 'Form',
          description: 'This library contains all the components you need to deploy a form with various field types.',
          components: './src/components/LamboLead-Tech-Library/form/*.vue',
          sections: [
            {
              name: 'Fields',
              description: 'This library contains all the custom fields that you can use inside a form.',
              components: './src/components/LamboLead-Tech-Library/form/fields/*.vue'
            }

          ]
        },
        {
          name: 'Slider',
          description: 'This library contains all the components you need to deploy a slider with your custom slides.',
          components: './src/components/LamboLead-Tech-Library/slider/*.vue',
          sections: [
            {
              name: 'Controls',
              description: 'This library contains the controls for the slider.',
              components: './src/components/LamboLead-Tech-Library/slider/controls/*.vue'
            }
          ]
        }
      ]
    },
    {
      name: 'Views',
      description: 'These are the docs for each view of the project. These components are located inside the \'/src/components/views\' folder.',
      components: [
        './src/components/views/main-page/MainPage.vue',
        './src/components/views/about/About.vue',
        './src/components/views/semillero/Semillero.vue',
        './src/components/views/repository/Repository.vue',
        './src/components/views/events/Events.vue',
        './src/components/views/vinculation/Vinculation.vue',
        './src/components/views/member/Member.vue',
      ]
      // components: ['./src/components/views/main-page/*.vue', './src/components/views/about/*.vue', './src/components/views/events/*.vue', './src/components/views/member/*.vue', './src/components/views/project-request/ProjectRequest.vue', './src/components/views/repository/Repository.vue', './src/components/views/semillero/Semillero.vue', './src/components/views/vinculation/Vinculation.vue']
      // components: () => {
      //   let folders = ['main-page', 'about', 'events', 'semillero', 'vinculation', 'repository', 'member'];
      //   let path = './src/components/views/';
      //   return folders.map(folder => {
      //     return `${path}${folder}/*.vue`;
      //   });
      // }
      // sections: [
      //   {
      //     name: 'Main Page',
      //     components: './src/components/views/main-page/*.vue',
      //     sections: [
      //       {
      //         name: 'Components',
      //         components: './src/components/views/main-page/components/*.vue'
      //       }
      //     ]
      //   }
        // {
        //   name: 'About',
        //   components: './src/components/views/about/components/*.vue'
        // },
        // {
        //   name: 'Semillero',
        //   components: './src/components/views/semillero/components/*.vue'
        // },
        // {
        //   name: 'Repository',
        //   components: './src/components/views/repository/components/*.vue'
        // },
        // {
        //   name: 'Events',
        //   components: './src/components/views/events/components/*.vue'
        // },
        // {
        //   name: 'Vinculation',
        //   components: './src/components/views/vinculation/*.vue'
        // }
    },
  ],
  webpackConfig: require('./webpack.config.js')
}