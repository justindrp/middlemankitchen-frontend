import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { menuItemType } from './menuItemType'
import { promoType } from './promoType'
import { testimonialType } from './testimonialType'
import { galleryImageType } from './galleryImageType'
import { pageType } from './pageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, menuItemType, promoType, testimonialType, galleryImageType, pageType],
}
