export default {
  name: 'ourservices',
  title: 'Our Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{type: 'service'}],
    },
  ],
}
