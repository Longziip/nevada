import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HelloKittyIcon from './HelloKittyIcon';
import './FlowerGallery.css';

const FlowerGallery = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Beautiful high-quality flower bouquets
  const bouquets = [
    { 
      id: 1, 
      url: 'https://tse2.mm.bing.net/th/id/OIP.E_H19UmDuVpxrS8_6Uzd4wAAAA?rs=1&pid=ImgDetMain&o=7&rm=3', 
      alt: 'Beautiful Pink Roses Bouquet',
      name: 'Pink Roses Bouquet 💐'
    },
    { 
      id: 2, 
      url: 'https://www.emmiegray.de/media/image/54/33/61/EMMIEGRAY_LBH_CLASSIC_INFINITY_VIBRANTRED_600x600.png', 
      alt: 'Red Roses Bouquet',
      name: 'Red Roses Bouquet 🌹'
    },
    { 
      id: 3, 
      url: 'https://image.floranext.com/instances/elegantflowersfresno_com/catalog/product/i/m/img_4166_1.jpg?w=800&h=800&gen=1', 
      alt: 'White Elegant Flowers Bouquet',
      name: 'White Elegance Bouquet 🌸'
    },
    { 
      id: 4, 
      url: 'https://i.etsystatic.com/13796224/r/il/5181a5/5809329369/il_794xN.5809329369_msj2.jpg', 
      alt: 'Mixed Spring Flowers Bouquet',
      name: 'Mixed Spring Bouquet 🌺'
    },
    { 
      id: 5, 
      url: 'https://i.etsystatic.com/13683532/r/il/b2ddd6/2330218658/il_794xN.2330218658_egfh.jpg', 
      alt: 'Sunflower Bouquet',
      name: 'Sunflower Bouquet 🌻'
    },
    { 
      id: 6, 
      url: 'https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1703997497/vendor/9077/catalog/product/2/0/20231230083413_file_65907ec53fe05_65907fb11ecc7.jpeg', 
      alt: 'Lavender Bouquet',
      name: 'Lavender Dreams Bouquet 💜'
    },
  ];

  const nextBouquet = () => {
    setCurrentIndex((prev) => (prev + 1) % bouquets.length);
  };

  const prevBouquet = () => {
    setCurrentIndex((prev) => (prev - 1 + bouquets.length) % bouquets.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flower-gallery-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="flower-gallery-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="flower-gallery-header">
          <h2>💐 Beautiful Flower Bouquets For You <HelloKittyIcon size={28} /></h2>
        </div>

        <div className="flower-gallery-content">
          <button className="nav-btn prev-btn" onClick={prevBouquet}>
            <FaChevronLeft />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bouquet-container"
            >
              <img
                src={bouquets[currentIndex].url}
                alt={bouquets[currentIndex].alt}
                className="bouquet-image"
              />
              <div className="bouquet-name">{bouquets[currentIndex].name}</div>
            </motion.div>
          </AnimatePresence>

          <button className="nav-btn next-btn" onClick={nextBouquet}>
            <FaChevronRight />
          </button>
        </div>

        <div className="flower-gallery-indicators">
          {bouquets.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="flower-gallery-counter">
          {currentIndex + 1} / {bouquets.length}
        </div>

        <div className="flower-message">
          <p>💖 Each bouquet represents a special moment with you 💖</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlowerGallery;

