import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './PhotoGallery.css';

const PhotoGallery = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder images - replace with actual photos
  const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800', alt: 'Beautiful moment 1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800', alt: 'Beautiful moment 2' },
    { id: 3, url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800', alt: 'Beautiful moment 3' },
    { id: 4, url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800', alt: 'Beautiful moment 4' },
    { id: 5, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800', alt: 'Beautiful moment 5' },
    { id: 6, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', alt: 'Beautiful moment 6' },
  ];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="gallery-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="gallery-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="gallery-header">
          <h2>Our Beautiful Memories 💕 🧸</h2>
        </div>

        <div className="gallery-content">
          <button className="nav-btn prev-btn" onClick={prevPhoto}>
            <FaChevronLeft />
          </button>

          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              src={photos[currentIndex].url}
              alt={photos[currentIndex].alt}
              className="gallery-image"
            />
          </AnimatePresence>

          <button className="nav-btn next-btn" onClick={nextPhoto}>
            <FaChevronRight />
          </button>
        </div>

        <div className="gallery-indicators">
          {photos.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="gallery-counter">
          {currentIndex + 1} / {photos.length}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PhotoGallery;

