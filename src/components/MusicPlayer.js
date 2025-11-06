import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './MusicPlayer.css';

const MusicPlayer = ({ onClose }) => {
  // Make You Mine by Madison Beer
  const videoId = '_-v31Yc7RRY';
  
  // YouTube embed URL with autoplay, loop, and controls
  // Using enablejsapi=1 for better compatibility
  const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=0&loop=1&playlist=${videoId}&controls=1&modestbranding=1&rel=0&origin=${window.location.origin}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="music-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="music-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="music-header">
          <h2>🎵 Birthday Music 🎵 🧸</h2>
        </div>

        <div className="music-content">
          <div className="youtube-container">
            <iframe
              src={embedUrl}
              title="Make You Mine - Madison Beer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="youtube-player"
            ></iframe>
          </div>

          <p className="music-note">
            🎵 Make You Mine - Madison Beer 🎵
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MusicPlayer;

