import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import './ReasonsILoveYou.css';

const ReasonsILoveYou = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const reasons = [
    'Your beautiful ocean eyes that I can get lost in 🌊',
    'Your passion for anime and how excited you get talking about it 🎌',
    'The way you light up when you talk about motorcycles 🏍️',
    'Your strength and independence ✨',
    'Your beautiful smile that makes my day 💖',
    'How you make me feel loved and special 🧸',
    'Your kindness and caring nature 💕',
    'The way you support my dreams 🌟',
    'Your sense of adventure and freedom 🚀',
    'Just being you - because you\'re perfect exactly as you are 💎',
  ];

  const nextReason = () => {
    setCurrentIndex((prev) => (prev + 1) % reasons.length);
  };

  const prevReason = () => {
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="reasons-container"
    >
      <div className="reasons-box">
        <div className="reasons-header">
          <FaHeart className="reasons-heart" />
          <h3>Reasons I Love You 🧸</h3>
          <FaHeart className="reasons-heart" />
        </div>

        {!showAll ? (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="reason-card"
              >
                <p className="reason-text">{reasons[currentIndex]}</p>
                <div className="reason-number">
                  {currentIndex + 1} / {reasons.length}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="reasons-controls">
              <button onClick={prevReason} className="reason-btn prev-btn">
                ←
              </button>
              <button onClick={nextReason} className="reason-btn next-btn">
                →
              </button>
            </div>

            <button onClick={() => setShowAll(true)} className="show-all-btn">
              Show All Reasons 💕
            </button>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="all-reasons-list"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="reason-item"
              >
                <span className="reason-bullet">💖</span>
                {reason}
              </motion.div>
            ))}
            <button onClick={() => setShowAll(false)} className="back-btn">
              ← Back to Slideshow
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ReasonsILoveYou;

