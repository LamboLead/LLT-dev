// Import the required stores
import { useEventBus } from "/LLT/frontend/stores/event-bus.js";
import { useMainState } from "/LLT/frontend/stores/main-state.js";

// Import the required functions
import standardize from '/LLT/frontend/functionalities/data-management/data-standardization.js';
import * as Fetch from "/LLT/frontend/functionalities/data-management/fetch.js";
import * as LocalStorage from '/LLT/frontend/functionalities/data-management/local-storage.js';

export default {
  id: 'dummy-table',
  // database: 'stem',
  // view: 'repository_view',
  mainKey: 'project',
  link: 'projects-table',
  // searchParams: {'order': 'RAND()'}, // This depends on the database syntax. You may need to change it later
  // advancedSearch: true,
  // pagination: {
  //   rowsPerPage: 20
  // },
  // fieldWrap: "horizontal-scroll", // "vertical-scroll" || "hidden"
  headers: [ // These will work for table headers and search bar
    {
      title: 'Título',
      fieldName: 'project_title',
      table: 'projects', // In case you need to search in the table
      searchAs: {
        type: 'text'
      }, // To search as a text, singular
      length: 'long',
      sortable: true
    },
    {
      title: 'Autor(es)',
      fieldName: 'member_name',
      table: 'members',
      searchAs: {
        type: 'text',
        plural: true
      }, // To search by comma-separated text values
      length: 'medium',
      // renderAs: (value) => {
      //   // Render 'Manuel Alejandro Fula Rojas' as 'Fula M.'
      //   let nameArray = value.split(" ");
      //   return `${nameArray[2]} ${nameArray[0][0]}.`;
      // },
      // infoOnHover: true,
      clickable: true,
      click: (item) => {
        let mainState = useMainState();
        mainState.router.push({path: "/miembros", query: {"member_id": item.id}});
      }
    },
    {
      title: 'Año',
      fieldName: 'project_year',
      table: 'projects',
      searchAs: {
        type: 'number',
        range: true
      },
      length: 'short',
    },
    {
      title: 'Palabras clave',
      fieldName: 'keyword_keyword',
      table: 'keywords',
      searchAs: {
        type: 'text',
        plural: true
      },
      length: 'medium',
      click: (item) => {
        const mainState = useMainState();
        mainState.$patch(state => {
          state.searchParams.projectsTable = {"keyword_keyword": item.value}
        });
      }
    }
  ],
  actionFields: {
    title: 'Acciones',
    length: 'medium', // fix this
    content: [
      {
        id: 'open_abstract',
        icon: 'FileInfo',
        title: 'Abrir información del proyecto',
        attributes: {
          "data-click-outside-trigger": "project-info" // Attribute to tell the click outside event to avoid closing the selected element on click
        },
        click: (rowId, options) => {
          let eventBus = useEventBus();
          eventBus.setStatus('project-info', true);
          let mainState = useMainState();
          mainState.$patch(state => {
            state.searchParams.projectInfo = {"project_id": rowId}
          });
        }
      },
      {
        id: 'like_project',
        icon: 'FileLike',
        title: 'Añadir a los proyectos que me gustan',
        click: (rowId, options) => {
          let mainState = useMainState();
          if (mainState.likedProjects.includes(rowId)) {
            mainState.removeItemFromArray("likedProjects", rowId);
          } else {
            mainState.addItemToArray("likedProjects", rowId);
          }
        },
        toggle: {
          isOn: (rowId) => {
            let mainState = useMainState();
            return mainState.likedProjects.includes(rowId);
          },
          containerStyle: {
            transition: "background 0.3s ease",
            background: "red"
          },
          style: {
            transition: "fill 0.3s ease, transform 0.15s ease",
            transform: "rotate(370deg)",
            fill: "red"
          }
        }
      },
      {
        id: 'request_project',
        title: 'Solicitar acceso al proyecto',
        icon: 'FileRequest',
        click: (rowId, options) => {
          let mainState = useMainState();
          mainState.router.push({
            path: "/solicitudes",
            query: {"project_id": rowId}
          });
        }
      }
    ]
  },
  methods: {
    async fetchData(searchParams) {
      let url = "http://localhost:3008";
      let fetched = await Fetch.get(url, searchParams);
      // console.log(fetched); // For debugging purposes
      return standardize(fetched.result, {
        mainField: 'project_id',
        fields: [
          {
            name: 'project_title',
            identifier: 'project_id',
            metadata: ['project_id']
          },
          {
            name: 'member_name',
            identifier: 'member_id',
            metadata: ['member_id', 'member_image']
          },
          {
            name: 'project_year'
          },
          {
            name: 'keyword_keyword',
            identifier: 'keyword_id',
            metadata: ['keyword_id']
          }
        ]
      });
    },
    async fetchProjectData(searchParams) {
      let url = "http://localhost:3007/repositorio";
      let standardized = standardize(
        (await Fetch.get(url, searchParams)).result,
        {
          mainField: 'project_id',
          fields: [
            {
              name: 'project_title',
              identifier: 'project_id',
              metadata: ['project_id']
            },
            {
              name: 'member_name',
              identifier: 'member_id',
              metadata: ['member_id', 'member_image']
            },
            {
              name: 'project_year'
            },
            {
              name: 'keyword_keyword',
              identifier: 'keyword_id',
              metadata: ['keyword_id']
            },
            {
              name: 'project_abstract'
            },
            {
              name: 'project_infography'
            }
          ]
        });
      return standardized[0];
    }
  },
  async mounted() {
    // Subscribe to mainState
    let mainState = useMainState();
    mainState.likedProjects = await LocalStorage.get('liked-projects');
    mainState.$subscribe((mutation, state) => {
      LocalStorage.set('liked-projects', state.likedProjects);
    });
    if (!mainState.likedProjects) {
      mainState.setState('likedProjects', []);
    }
  }
};