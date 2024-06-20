'use client'
import { useGalleryData } from "@/lib/useGalleryData";
import { useState } from 'react';

export default function Home() {
  const { data } = useGalleryData();
  const [images, setImages] = useState(data);

  const handleSort = () => {
    setImages([...images].reverse());
  };

  return (
    <main>
      <h1>Image Gallery</h1>
      <button onClick={handleSort}>Reverse Order</button>
      <div className="gallery">
        {images.map((image, index) => (
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
        button {
          margin-bottom: 20px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #005bb5;
        }
        main {
          padding: 20px;
        }
        h1 {
          margin-bottom: 20px;
        }
      `}</style>
    </main>
  );
}
