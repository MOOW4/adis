import { useState, useEffect } from 'react';
import Gallery from "./components/Gallery.jsx";

const IMAGES = import.meta.glob("./assets/*")

function App() {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const images = await Promise.all(
        Object.values(IMAGES).map((importImage) => importImage())
      );
      setLoadedImages(images.map((img) => img.default));
    };
    loadImages();
  }, []);

  return (
    <>
      <header>
        <h1 className="text-3xl font-bold underline text-indigo-400">React App</h1>
      </header>
      <main>
        <Gallery images={loadedImages}></Gallery>
      </main>
    </>
  )
}

export default App