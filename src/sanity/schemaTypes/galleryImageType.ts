import { defineType, defineField } from 'sanity'

export const galleryImageType = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'isUGC',
      title: 'User Generated Content?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'credit',
      title: 'Photo Credit / Instagram Handle',
      type: 'string',
    }),
    defineField({
      name: 'sourceLink',
      title: 'Source Post Link',
      type: 'url',
    }),
  ],
})
