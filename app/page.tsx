'use client';
import {useGalleryData} from '@/lib/useGalleryData';

export default function Home() {
  const {data} = useGalleryData();

  return (
    <main>
      <h1>Image Gallery</h1>
      <div className="gallery">
        {data.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={`/images/${image.filename}`} alt={image.altText} />
            <p>{image.altText}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .gallery {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .gallery-item {
          flex: 1 1 calc(25% - 20px);
          box-sizing: border-box;
          margin: 10px;
        }
        img {
          max-width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </main>
  );
}
