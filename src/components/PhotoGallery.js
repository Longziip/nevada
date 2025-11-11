import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HelloKittyIcon from './HelloKittyIcon';
import './PhotoGallery.css';

const PhotoGallery = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder images - replace with actual photos
  const photos = [
    { id: 1, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437518332084490411/image.png?ex=691388c6&is=69123746&hm=bde0484cf1233e64bcd9c67eb9a6bac53671236930b84e0caedf577f210d2ab6&=&format=webp&quality=lossless&width=616&height=345', alt: 'Beautiful moment' },
    { id: 2, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437518332957032559/image2.png?ex=691388c6&is=69123746&hm=a0f0c169dee75a85713ff87f6e3e749e9b4e959ba6f3c4e7231b8804c53bffea&=&format=webp&quality=lossless&width=616&height=382', alt: 'Beautiful moment' },
    { id: 3, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437518333447639080/image3.png?ex=691388c6&is=69123746&hm=b00d1876d72b8222830c7311932ba23aae25a29144056197d8bcae270e87e3c8&=&format=webp&quality=lossless&width=616&height=290', alt: 'Beautiful moment' },
    { id: 4, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437518333875453984/image4.png?ex=691388c6&is=69123746&hm=f8bb214820414bcb955767058df226681d0ae3fb8331445969ff7f47654248de&=&format=webp&quality=lossless&width=616&height=266', alt: 'Beautiful moment' },
    { id: 5, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437518334198546543/image5.png?ex=691388c6&is=69123746&hm=61e83837a63f95b114791147b2417bc68242438c3dc6c129804cfe7b437624cf&=&format=webp&quality=lossless&width=616&height=404', alt: 'Beautiful moment' },
    { id: 6, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437518334605267096/image6.png?ex=691388c6&is=69123746&hm=b605f1e3e00eee19860d71a9de59b30635eb5d5c78bff6612e8e6ffef4596d13&=&format=webp&quality=lossless&width=616&height=410', alt: 'Beautiful moment' },
    { id: 7, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437518335091802132/image7.png?ex=691388c6&is=69123746&hm=967c02c146122b859fb9de14984e0d159a26671d4186b67425c7bdc0b735cdcc&=&format=webp&quality=lossless&width=616&height=346', alt: 'Beautiful moment' },
    { id: 8, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437518335498653819/image8.png?ex=691388c6&is=69123746&hm=48866dce92f52ba70d40d1a446cad67eef4026996cd38bb6330abf7425f02094&=&format=webp&quality=lossless&width=616&height=365', alt: 'Beautiful moment' },
    { id: 9, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437518335913885822/image9.png?ex=691388c7&is=69123747&hm=79dba32d1b7555a8b1d94e5cd76d65409547a7d50f8ae9dc042d7036505569ae&=&format=webp&quality=lossless&width=616&height=323', alt: 'Beautiful moment' },
    { id: 10, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437518332499722513/image1.png?ex=691388c6&is=69123746&hm=4ea53df32b578f79824c931f0e1c65b3d2e7978823130105ea542d3f1cd9602a&=&format=webp&quality=lossless&width=616&height=578', alt: 'Beautiful moment' },
    { id: 11, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437518846268411934/image10.png?ex=69138940&is=691237c0&hm=fbe7f2bde7bd0551216e259d26b2b52c9031a9038bb98c10cef50ac0d9cd77b3&=&format=webp&quality=lossless&width=616&height=437', alt: 'Beautiful moment' },
    { id: 12, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437518847661047910/image11.png?ex=69138941&is=691237c1&hm=fa9323e958135344de0f8c395a1a822325be7aa71bf489b82a0fb4b0f5ec026f&=&format=webp&quality=lossless&width=616&height=316', alt: 'Beautiful moment' },
    { id: 13, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437518848558633172/image12.png?ex=69138941&is=691237c1&hm=2b621cd385e90d0ef6f6830bd33af08655c4d1b7afdf0ddc4848c5aa0f79120b&=&format=webp&quality=lossless&width=616&height=436', alt: 'Beautiful moment' },
    { id: 14, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437518850340946020/image13.png?ex=69138941&is=691237c1&hm=689b062d8dd745bf9571622e669f5cfbd6cfb21a6410b34dc4ad04494079a90e&=&format=webp&quality=lossless&width=616&height=430', alt: 'Beautiful moment' },
    { id: 15, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437514341527326930/IMG_2812.jpg?ex=6913850e&is=6912338e&hm=d773523e70e256422009d4f2ea58e99cbbd6b84cd12b6f5d97b16cd209c3b8b4&=&format=webp&width=616&height=1095', alt: 'Beautiful moment' },
    { id: 16, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437514341967597640/IMG_2811.jpg?ex=6913850e&is=6912338e&hm=6ba6968c71e68adf3cad0e97f3d73d430fae201102e3f13287cabbf6e11ce097&=&format=webp&width=616&height=1095', alt: 'Beautiful moment' },
    { id: 17, url: 'https://media.discordapp.net/attachments/1437514277668917382/1437514342890209424/IMG_2810.jpg?ex=6913850f&is=6912338f&hm=a2d9494d2952862f94e3d7dfc3f30850525487f58bcf0aff1ec93b315290a319&=&format=webp&width=616&height=1095', alt: 'Beautiful moment' },

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

