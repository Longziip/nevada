import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { motion } from 'framer-motion';
import { FaHeart, FaMusic, FaImage, FaGift } from 'react-icons/fa';
import FlowerGenerator from './components/FlowerGenerator';
import BinaryMessage from './components/BinaryMessage';
import TypedMessage from './components/TypedMessage';
import PhotoGallery from './components/PhotoGallery';
import MusicPlayer from './components/MusicPlayer';
import EnvelopeLetter from './components/EnvelopeLetter';
import './App.css';

function App() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showGallery, setShowGallery] = useState(false);
  const [showMusic, setShowMusic] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Stop confetti after 10 seconds
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 10000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(confettiTimer);
    };
  }, []);

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  const particlesLoaded = (container) => {
    console.log('Particles loaded:', container);
  };

  return (
    <div className="App">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
        />
      )}

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#FF91A4', '#FFB6C1', '#FF69B4', '#FF1493'],
            },
            links: {
              color: '#FFB6C1',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="main-content">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="header"
        >
          <motion.h1
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="main-title"
          >
            <FaHeart className="heart-icon" /> 🧸 Happy Birthday 🧸 <FaHeart className="heart-icon" />
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="name-title"
          >
            KAMILIA
          </motion.h2>
        </motion.div>

        <FlowerGenerator />

        <BinaryMessage />

        <TypedMessage />

        <EnvelopeLetter />

        <div className="feature-buttons">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowGallery(!showGallery)}
            className="feature-btn"
          >
            <FaImage /> Memories
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowMusic(!showMusic)}
            className="feature-btn"
          >
            <FaMusic /> Music
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="feature-btn"
          >
            <FaGift /> Special Message
          </motion.button>
        </div>

        {showGallery && <PhotoGallery onClose={() => setShowGallery(false)} />}
        {showMusic && <MusicPlayer onClose={() => setShowMusic(false)} />}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="footer"
        >
          <p>Made with <FaHeart className="heart-inline" /> for Kami by Zipry</p>
        </motion.div>
      </div>
    </div>
  );
}

export default App;

