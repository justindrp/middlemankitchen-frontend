export interface SanityImageAsset {
  _type: 'reference';
  _ref: string;
}

export interface SanityImage {
  _type: 'image';
  asset: SanityImageAsset;
  alt?: string;
  // If you use crop/hotspot, add them here as well
}