import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';
import GalleryCarousel from '../components/GalleyCarousell';
import api from '../api';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [rooms, setRooms] = useState([]); // Estado para las habitaciones
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await api.get("/rooms"); // Solicitar las habitaciones desde el backend
        setRooms(response.data); // Guardar las habitaciones en el estado
        if (response.data.length > 0) {
          setSelectedImage(response.data[0].imageUrl); // Seleccionar la primera imagen
        }
      } catch (err) {
        setError("Failed to load rooms. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false); // Terminar la carga
      }
    };

    fetchRooms();
  }, []); // Se ejecuta una sola vez cuando el componente se monta

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl); // Cambiar la imagen seleccionada
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="gallery-main">
      <h3>A small view into another world.</h3>
      <div className="gallery-container">
        <GalleryCarousel rooms={rooms} onImageClick={handleImageClick} />
      </div>
      <div className="big-img">
        {selectedImage && (
          <img className="selected-image" src={selectedImage} alt="Selected" />
        )}
      </div>
    </div>
  );
}

export default Gallery;





/* import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';
import GalleryCarousel from '../components/GalleyCarousell';
import rooms from '../bbdd/rooms';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (rooms.length > 0) {
      setSelectedImage(rooms[0].imageUrl);
    }
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="gallery-main">
      <h3>A small view into another world.</h3>
    <div className="gallery-container">
      <GalleryCarousel rooms={rooms} onImageClick={handleImageClick} />
    </div>
    <div className="big-img">
      {selectedImage && (
        <img className="selected-image" src={selectedImage} alt="Selected" />   
      )}
    </div>
    </div>
  );
}

export default Gallery;
 */