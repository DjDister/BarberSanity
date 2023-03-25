export default {
  name: 'reviews',
  title: 'Reviews',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'review',
      title: 'Review',
      type: 'text',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
}
