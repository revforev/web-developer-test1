// ./app/page.tsx
'use client';
import {useGalleryData} from '@/lib/useGalleryData';
import {useState} from 'react';

export default function Home() {
  const {data} = useGalleryData();
  const [images, setImages] = useState(data);

  const handleSort = () => {
    setImages([...images].reverse());
  };

  return (
    <div className="page-container">
      <main>
        <h1>Image Gallery</h1>
        <button onClick={handleSort}>Reverse Order</button>
        <div className="gallery">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <div className="image-container">
                <div className="image-block">
                  <img src={`/img/${image.filename}`} alt={image.altText} />
                </div>
              </div>
              <p>{image.altText}</p>
            </div>
          ))}
        </div>
      </main>
      <style jsx>{`
        .page-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f0f0f0;
          padding: 20px;
        }
        main {
          width: 100%;
          max-width: 1200px;
          background-color: white;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 20px;
          justify-items: center;
        }
        .gallery-item {
          text-align: center;
        }
        .image-container {
          position: relative;
          overflow: hidden;
        }
        .image-block {
          width: 100%;
          padding-top: 100%;
          position: relative;
          border-radius: 10px;
        }
        .image-block img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
        p {
          margin-top: 10px;
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
        h1 {
          margin-bottom: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
