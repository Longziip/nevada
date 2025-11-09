import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HelloKittyIcon from './HelloKittyIcon';
import './PhotoGallery.css';

const PhotoGallery = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder images - replace with actual photos
  const photos = [
    { id: 1, url: 'https://media.discordapp.net/attachments/1418460823151443988/1431044367631646880/image.png?ex=690d1eec&is=690bcd6c&hm=78361d9aac67eb49851e9945f89c9ece71d4a1208fdab8bd6d2dcbe45352f24d&=&format=webp&quality=lossless&width=1042&height=606', alt: 'Beautiful moment 1' },
    { id: 2, url: 'https://media.discordapp.net/attachments/1418460823151443988/1429900348952281088/image.png?ex=690ce9f9&is=690b9879&hm=56e30bf21a9c320ab62fe1f73d5a2561f269ed482f72774a7165aba4e066bad6&=&format=webp&quality=lossless&width=757&height=710', alt: 'Beautiful moment 2' },
    { id: 3, url: 'https://media.discordapp.net/attachments/1418460823151443988/1429893428711526540/image.png?ex=690ce387&is=690b9207&hm=7e75e9298ecd70f9b4dcf5ba948f6d42d620fb1431e5de004ec99b6e1c804bbd&=&format=webp&quality=lossless&width=977&height=606', alt: 'Beautiful moment 3' },
    { id: 4, url: 'https://media.discordapp.net/attachments/1418460823151443988/1427744899767472148/image.png?ex=690cfb8e&is=690baa0e&hm=6b85ac71573f82f5f7b7444b4cee769acb93859af11277b9684e7f4f24c8174d&=&format=webp&quality=lossless&width=1286&height=606', alt: 'Beautiful moment 4' },
    { id: 5, url: 'https://media.discordapp.net/attachments/1418460823151443988/1427448525377110107/image.png?ex=690d3909&is=690be789&hm=8480b0135d358335f1fb4c00010f023de50e864b87fd64e61a9920122802f338&=&format=webp&quality=lossless&width=1384&height=597', alt: 'Beautiful moment 5' },
    { id: 6, url: 'https://media.discordapp.net/attachments/1418460823151443988/1424538607766470778/image.png?ex=690d2ef6&is=690bdd76&hm=a03a543b17b0cee35c597492c553531ad93fb84651ef009bcc44b9cbaae46e61&=&format=webp&quality=lossless&width=1024&height=606', alt: 'Beautiful moment 6' },
    { id: 7, url: 'https://media.discordapp.net/attachments/1418460823151443988/1424110728033599660/image.png?ex=690cf1f8&is=690ba078&hm=48950cb1c2ca5b61814d36e736200957999b2a1b1480622b735081ff40e9f86d&=&format=webp&quality=lossless&width=1155&height=606', alt: 'Beautiful moment 7' },
    { id: 8, url: 'https://media.discordapp.net/attachments/1418460823151443988/1423345964390809631/image.png?ex=690d757a&is=690c23fa&hm=181efd7c814dc9ae5d822971a25b3e68ea4279b12fc0aea09eaa2b014347fc7b&=&format=webp&quality=lossless', alt: 'Beautiful moment 8' },
    { id: 9, url: 'https://media.discordapp.net/attachments/1418460823151443988/1422392593534291998/image.png?ex=690d4955&is=690bf7d5&hm=811eaa3c55ef61b07bc33d16408101cac0217e73e2d226776bb205a2e23e8c55&=&format=webp&quality=lossless&width=869&height=606', alt: 'Beautiful moment 9' },
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
          <h2>Our Beautiful Memories 💕 <HelloKittyIcon size={28} /></h2>
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

