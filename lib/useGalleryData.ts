import {useState} from 'react';

const galleryJSON: string = `[
  { "filename": "Image-1.png", "altText": "Image One", "digit": "1" },
  { "filename": "Image-number-2.png", "altText": "Image Two", "digit": "2" },
  { "filename": "Image-3.png", "altText": "Image Three", "digit": "3" },
  { "filename": "Image-number-4.png", "altText": "Image Four", "digit": "4" },
  { "filename": "Image-5.png", "altText": "Image Five", "digit": "5" },
  { "filename": "Image-6.png", "altText": "Image Six", "digit": "6" },
  { "filename": "Image-7.png", "altText": "Image Seven", "digit": "7" },
  { "filename": "Image-8.png", "altText": "Image Eight", "digit": "8" }
]`;

export interface GalleryImage {
  filename: string;
  altText: string;
  digit: string; // Added digit property
}

export interface GalleryData {
  data: GalleryImage[];
}

export function useGalleryData(): GalleryData {
  const [data] = useState<GalleryImage[]>(JSON.parse(galleryJSON) as GalleryImage[]);
  return {data};
}
