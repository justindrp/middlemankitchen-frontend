import { defineType, defineField } from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page (About / Contact / FAQ)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL, e.g. about, contact)',
      type: 'slug',
      options: { source: 'title', maxLength: 32 },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
    }),
    defineField({
      name: 'isLive',
      title: 'Live (show on site)',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
