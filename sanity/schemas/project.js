export default {
  name: 'projectInfo',
  title: 'ProjectInfo',
  type: 'document',
  fields: [
    {
      name: 'tile',
      title: 'Tile',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options:{
        hotspot: true
      },
    },
    {
      name: 'summary',
      title: 'summary',
      type: 'text',
    },
    {
      name: 'tech',
      title: 'Tech',
      type: 'array',
      of:[{type:"reference", to:{type:"skill"}}],
    },
    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    },
    {
      name: 'linkToGitHub',
      title: 'LinkToGitHub',
      type: 'url',
    },
  ],
}
