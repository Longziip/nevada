import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './FlowerGallery.css';

const FlowerGallery = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Beautiful high-quality flower bouquets
  const bouquets = [
    { 
      id: 1, 
      url: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=1200&q=90', 
      alt: 'Beautiful Pink Roses Bouquet',
      name: 'Pink Roses Bouquet 💐'
    },
    { 
      id: 2, 
      url: 'https://images.unsplash.com/photo-1518621012428-ef8be443fbf1?w=1200&q=90', 
      alt: 'Red Roses Bouquet',
      name: 'Red Roses Bouquet 🌹'
    },
    { 
      id: 3, 
      url: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=1200&q=90', 
      alt: 'White Elegant Flowers Bouquet',
      name: 'White Elegance Bouquet 🌸'
    },
    { 
      id: 4, 
      url: 'https://images.unsplash.com/photo-1563241522-0a300ca42a92?w=1200&q=90', 
      alt: 'Mixed Spring Flowers Bouquet',
      name: 'Mixed Spring Bouquet 🌺'
    },
    { 
      id: 5, 
      url: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=1200&q=90', 
      alt: 'Sunflower Bouquet',
      name: 'Sunflower Bouquet 🌻'
    },
    { 
      id: 6, 
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=90', 
      alt: 'Lavender Bouquet',
      name: 'Lavender Dreams Bouquet 💜'
    },
    { 
      id: 7, 
      url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&q=90', 
      alt: 'Peony Bouquet',
      name: 'Peony Paradise Bouquet 🌷'
    },
    { 
      id: 8, 
      url: 'https://images.unsplash.com/photo-1606041001883-2e5c52ed784b?w=1200&q=90', 
      alt: 'Tulip Bouquet',
      name: 'Tulip Garden Bouquet 🌷'
    },
    { 
      id: 9, 
      url: 'https://images.unsplash.com/photo-1606041001883-2e5c52ed784b?w=1200&q=90', 
      alt: 'Rose and Baby Breath Bouquet',
      name: 'Romantic Rose Bouquet 💕'
    },
    { 
      id: 10, 
      url: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=1200&q=90', 
      alt: 'Orchid Bouquet',
      name: 'Exotic Orchid Bouquet 🌸'
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
          <h2>💐 Beautiful Flower Bouquets For You 🧸</h2>
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

