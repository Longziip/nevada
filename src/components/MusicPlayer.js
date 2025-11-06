import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import './MusicPlayer.css';

const MusicPlayer = ({ onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  // Make You Mine by Madison Beer
  const musicUrl = 'https://www.youtube.com/watch?v=1aA1Z2rIjYM'; // Make You Mine - Madison Beer

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

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
          <div className="music-visualizer">
            <div className="visualizer-bar" style={{ animationDelay: '0s' }} />
            <div className="visualizer-bar" style={{ animationDelay: '0.1s' }} />
            <div className="visualizer-bar" style={{ animationDelay: '0.2s' }} />
            <div className="visualizer-bar" style={{ animationDelay: '0.3s' }} />
            <div className="visualizer-bar" style={{ animationDelay: '0.4s' }} />
            <div className="visualizer-bar" style={{ animationDelay: '0.5s' }} />
            <div className="visualizer-bar" style={{ animationDelay: '0.6s' }} />
            <div className="visualizer-bar" style={{ animationDelay: '0.7s' }} />
          </div>

          <div className="music-controls">
            <button className="play-btn" onClick={togglePlay}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>

          <div className="volume-control">
            <button className="mute-btn" onClick={toggleMute}>
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>

          <audio
            ref={audioRef}
            src={musicUrl}
            loop
            onEnded={() => setIsPlaying(false)}
          />

          <p className="music-note">
            🎵 Make You Mine - Madison Beer 🎵
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MusicPlayer;

