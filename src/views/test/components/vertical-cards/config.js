// Import the required stores
import { useEventBus } from '/LLT/frontend/stores/event-bus.js';

// Import the required functions
import standardize from '/LLT/frontend/functionalities/data-management/data-standardization.js';
import * as Fetch from '/LLT/frontend/functionalities/data-management/fetch.js';

export default {
  id: 'events-vertical-cards',
  info: [
    {
      type: 'title',
      fieldName: 'event_name',
      order: 1,
      classes: ''
    },
    {
      type: 'regular',
      title: 'Organizadores',
      fieldName: 'organizer_name',
      classes: '',
      click: () => {

      },
      order: 2
    },
    // {
    //   type: 'regular',
    //   title: 'Fecha de publicación',
    //   fieldName: 'event_publishedAt',
    //   classes: '',
    //   renderAs: (value) => {
    //     let date = new Date(value);
    //     return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
    //   },
    //   order: 7
    // },
    {
      type: 'regular',
      title: 'Fecha',
      fieldName: 'date',
      classes: 'event-info',
      order: 4
    },
    {
      type: 'regular',
      title: 'Hora',
      fieldName: 'time',
      classes: 'event-info',
      order: 5
    },
    {
      type: 'regular',
      title: 'Lugar',
      fieldName: 'location',
      classes: 'event-info',
      order: 6
    },
    {
      type: 'regular',
      fieldName: 'event_description',
      classes: 'event-description',
      order: 8
    }
  ],
  buttons: [
    {
      text: 'Ver más',
      click: (parentInfo) => {
        let eventBus = useEventBus();
        eventBus.setStatus('event-info', true);
      }
      // , enabled: () => false
      // , classes: 'your-class'
    },
    {
      text: 'Inscripción',
      click: (parentInfo) => {
        let eventLink = getRelatedFieldValue(parentInfo.fields, 'event_link')[0].value;
        window.open(eventLink, '_blank');
      },
      visible: (parentInfo) => {
        let eventLink = getRelatedFieldValue(parentInfo.fields, 'event_link')[0].value;
        if (!eventLink) return false;
        return true;
      }
    }
  ],
  animations: {
    active: false // To activate/deactivate animations
  },
  methods: {
    async fetchData() {
      let url = 'http://localhost:3007/eventos';
      let fetched = (await Fetch.get(url)).result;
      return standardize(fetched, {
        mainField: 'event_id',
        fields: [
          {
            name: 'event_name',
            identifier: 'event_id',
            metadata: ['event_id']
          },
          {name: 'event_link'},
          {
            name: 'organizer_name',
            groupBy: [
              {
                name: 'member_name',
                identifier: 'member_id',
                metadata: ['member_id'],
                allowNulls: false
              },
              {
                name: 'organization_name',
                identifier: 'organization_id',
                metadata: ['organization_id', 'organization_link'],
                allowNulls: false
              }
            ]
          },
          {
            name: 'event_description',
            allowNulls: true
          },
          {
            name: 'event_information',
            allowNulls: true,
            json: {
              fields: ['date', 'time', 'location'],
              parseAsFields: true
            }
          },
          {name: 'event_publishedAt'}
        ]
      });
    }
  }
};

const getRelatedFieldValue = (fields, fieldName) => {
  return fields.find(item => item.fieldName === fieldName).content;
}