import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './MusicPlayer.css';

const MusicPlayer = ({ onClose }) => {
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef(null);

  // Make You Mine by Madison Beer - Extract video ID
  const videoId = '1aA1Z2rIjYM';

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        playerRef.current = new window.YT.Player('youtube-player', {
          videoId: videoId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            loop: 1,
            modestbranding: 1,
            rel: 0,
            playlist: videoId, // Required for loop to work
          },
          events: {
            onReady: () => {
              setPlayerReady(true);
            },
          },
        });
      };
    } else if (window.YT && window.YT.Player) {
      // API already loaded
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          loop: 1,
          modestbranding: 1,
          rel: 0,
          playlist: videoId,
        },
        events: {
          onReady: () => {
            setPlayerReady(true);
          },
        },
      });
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

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
            <div id="youtube-player" className="youtube-player"></div>
          </div>

          <p className="music-note">
            🎵 Make You Mine - Madison Beer 🎵
          </p>
          {!playerReady && (
            <p className="loading-text">Loading player...</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MusicPlayer;

