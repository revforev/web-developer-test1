// ./app/page.tsx
'use client';
import {useGalleryData} from '@/lib/useGalleryData';
import {useState} from 'react';

export default function Home() {
  const {data} = useGalleryData();
  const [images, setImages] = useState(data);
  const [isSorted, setIsSorted] = useState(false);

  const handleSort = () => {
    setImages([...images].reverse());
    setIsSorted(!isSorted);
  };

  return (
    <div className="page-container">
      <main>
        <h1>Web Developer Gallery</h1>
        <div className="gallery">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <div className="image-container">
                <img src={`/img/${image.filename}`} alt={image.altText} />
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleSort}>
          Sort
          <img
            src={`/img/${isSorted ? 'IconUp.svg' : 'IconDown.svg'}`}
            alt="Sort Icon"
            className="sort-icon"
          />
        </button>
      </main>
      <style jsx>{`
        .page-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(to top, #ff8ffc, #ffbffc);
          padding: 20px;
        }
        main {
          width: 100%;
          max-width: 1200px;
          background-color: #ffcdfc;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(4, auto);
          gap: 10px;
          margin-top: 20px;
          justify-items: center;
        }
        .gallery-item {
          text-align: center;
        }
        .image-container {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        p {
          margin-top: 10px;
        }
        button {
          display: inline-flex;
          align-items: center;
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          background-color: white;
          color: black;
          border: none;
          border-radius: 25px;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #005bb5;
        }
        .sort-icon {
          width: 16px;
          height: 16px;
          margin-left: 10px;
        }
        h1 {
          margin-bottom: 20px;
          font-size: 3em;
          text-align: left;
        }
      `}</style>
    </div>
  );
}
