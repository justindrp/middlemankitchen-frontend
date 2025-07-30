import { defineType, defineField } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Customer Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Customer Name (or leave blank for anonymous)',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Testimonial',
      type: 'text',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      validation: rule => rule.min(1).max(5),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'screenshot',
      title: 'Screenshot (optional)',
      type: 'image',
    }),
    defineField({
      name: 'platform',
      title: 'Platform (WhatsApp, Google, ShopeeFood, etc.)',
      type: 'string',
    }),
  ],
})
