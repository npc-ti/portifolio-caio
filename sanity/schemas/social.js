export default {
  name: 'social',
  title: 'Social',
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
      name: 'url',
      title: 'url',
      type: 'url'
    }
  ],
}
