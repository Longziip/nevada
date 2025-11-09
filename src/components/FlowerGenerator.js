import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './FlowerGenerator.css';

const FlowerGenerator = () => {
  const containerRef = useRef(null);
  const flowersRef = useRef([]);

  useEffect(() => {
    const generateFlowers = () => {
      const container = containerRef.current;
      if (!container) return;

      // Clear existing flowers
      flowersRef.current.forEach(flower => {
        if (flower.element && flower.element.parentNode) {
          flower.element.parentNode.removeChild(flower.element);
        }
      });
      flowersRef.current = [];

      // Generate new flowers
      const flowerCount = 30;
      const flowerTypes = ['🌹', '🌷', '🌺', '🌸', '💐', '🌻', '🌼', '🏵️', '🎀', '🎌', '🏍️', '🌊', '✨'];

      for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.textContent = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
        
        const size = Math.random() * 30 + 20;
        flower.style.fontSize = `${size}px`;
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.top = `${Math.random() * 100}%`;
        flower.style.animationDelay = `${Math.random() * 5}s`;
        flower.style.animationDuration = `${Math.random() * 3 + 2}s`;

        container.appendChild(flower);
        flowersRef.current.push({ element: flower });
      }
    };

    generateFlowers();

    // Regenerate flowers periodically
    const interval = setInterval(() => {
      generateFlowers();
    }, 8000);

    return () => {
      clearInterval(interval);
      flowersRef.current.forEach(flower => {
        if (flower.element && flower.element.parentNode) {
          flower.element.parentNode.removeChild(flower.element);
        }
      });
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1 }}
      ref={containerRef}
      className="flower-container"
    />
  );
};

export default FlowerGenerator;

