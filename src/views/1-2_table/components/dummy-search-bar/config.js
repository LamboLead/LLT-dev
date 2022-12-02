export default {
  id: 'repository-search-bar',
  link: 'projects-table',
  advancedSearch: false,
  fields: [
    {
      title: 'Título',
      fieldName: 'project_title',
      type: 'String',
      placeholder: 'Por una transición energética pintosa'
    },
    {
      title: 'Autor(es)',
      fieldName: 'member_name',
      type: 'String',
      placeholder: 'Fulano de Tal'
    },
    {
      title: 'Año',
      fieldName: 'project_year',
      type: 'Number',
      placeholder: '1984'
    },
    {
      title: 'Palabras clave',
      fieldName: 'keyword_keyword',
      type: 'String',
      placeholder: 'Transición'
    }
  ],
  actions: {
    search: {
      title: 'Buscar',
      classes: '',
      keyName: 'ENTER'
    }
  }
}