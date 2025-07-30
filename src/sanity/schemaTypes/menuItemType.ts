import { defineType, defineField } from 'sanity'

export const menuItemType = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'priceRegular',
      title: 'Price (Regular)',
      type: 'number',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'priceSmall',
      title: 'Price (Small)',
      type: 'number',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'isSignature',
      title: 'Signature Menu?',
      type: 'boolean',
    }),
    defineField({
      name: 'orderLinkGrab',
      title: 'GrabFood Link',
      type: 'url',
    }),
    defineField({
      name: 'orderLinkShopee',
      title: 'ShopeeFood Link',
      type: 'url',
    }),
  ],
})
