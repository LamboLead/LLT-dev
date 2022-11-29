export default {
  id: 'example-search-bar',
  advancedSearch: true,
  fields: [
    {
      title: 'Fecha',
      fieldName: 'request_date',
      type: 'Date',
      placeholder: '', // If this isn't specified, the input element should render the type,
      // omitMethods: ['contains'], 
      // defaultMethod: 'equals'
    },
    {
      title: 'Hora',
      fieldName: 'request_time',
      type: 'Time',
      // set some defaults for each datatype. You can override them in this config file
      // searchMethods: ['contains', 'equals', 'range', 'comparison'],
      // defaultMethod: 'equals'
    },
    {
      title: 'Tipo',
      fieldName: 'request_type',
      type: 'FixedList',
      dataSource: () => {
        return ['You', 'Me']
      }
    },
    // {
    //   title: 'Asunto',
    //   fieldName: 'request_subject',
    //   type: 'String'
    // },
    // {
    //   title: 'Nombre',
    //   fieldName: 'request_fromName',
    //   type: 'String'
    // }
  ],
  actions: {
    search: {
      title: 'Buscar',
      classes: '',
      keyName: 'ENTER'
    }
  }
}

// Some ideas:

/*
export default {
  id: 'example-search-bar',
  advancedSearch: true,
  fields: [
    {
      title: 'Fecha',
      fieldName: 'request_date',
      type: 'Date',
      methods: {
        'contains': {
          default: true,
          placeholder: '05/07/1963',
          value: () => {return {
            title: 'Today',
            value: '22/10/2022'
          }}
        },
        'range': {
          placeholder: ['05/07/1963', '23/10/2022'],
          value: () => {
            return [
              {
                title: 'Yesterday',
                value: '22/10/2022
              },
              {
                title: 'Today',
                value: '23/10/2022
              }
            ]
          }
        }
      }
      placeholder: '', // If this isn't specified, the input element should render the type,
      // omitMethods: ['contains'], 
      // defaultMethod: 'equals'
    }
  ]
}
 */