import {useState, useEffect} from 'react';
import Gallery from "./components/Gallery.jsx";
import Header from "./components/Header.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";

const IMAGES = import.meta.glob("./assets/*")

function App() {
  const [loadedImages, setLoadedImages] = useState([]);
  const [selectedTab, setSelectedTab] = useState('gallery')

  useEffect(() => {
    const loadImages = async () => {
      const images = await Promise.all(
        Object.values(IMAGES).map((importImage) => importImage())
      );
      setLoadedImages(images.map((img) => img.default));
    };
    loadImages();
  }, []);

  const renderTab = () => {
    switch (selectedTab) {
      case 'gallery':
        return <Gallery images={loadedImages}></Gallery>;
      case 'contact':
        return <Contacts></Contacts>;
      default:
        return <Gallery images={loadedImages}></Gallery>;
    }
  }

  function handleTabChange(tab) {
    setSelectedTab(tab)
  }

  return (
    <div className="bg-slate-200">
      <Header tabChange={handleTabChange}>jinxiedis Gallery</Header>
      {renderTab()}
      <Footer />
    </div>
  )
}

export default App