export default {
  name: 'experienceInfo',
  title: 'ExperienceInfo',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    },
    {
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      options:{
        hotspot: true
      },
    },
    {
      name: 'company',
      title: 'Company',
      type: 'text',
    },
    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    },
    {
      name: 'dateEneded',
      title: 'DateEneded',
      type: 'date',
    },
    {
      name: 'isCurrentylWorkingHere',
      title: 'IsCurrentylWorkingHere',
      type: 'boolean',
    },
    {
      name: 'tech',
      title: 'Tech',
      type: 'array',
      of:[{type:"reference", to:{type:"skill"}}],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of:[{type:"string"}],
    },
  ],
}
