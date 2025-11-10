import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaHeart } from 'react-icons/fa';
import HelloKittyIcon from './HelloKittyIcon';
import './SpecialMessage.css';

const SpecialMessage = ({ onClose }) => {
  const [showCake, setShowCake] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="special-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="special-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="special-content">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="cake-container"
          >
            <div className="cake">
              <div className="candle" onClick={() => setShowCake(!showCake)}>
                <div className={`flame ${showCake ? 'blown' : ''}`}></div>
              </div>
              <div className="cake-layer top"></div>
              <div className="cake-layer middle"></div>
              <div className="cake-layer bottom"></div>
            </div>
          </motion.div>

          {showCake && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="birthday-wish"
            >
              <h2>🎉 Make a Wish! 🎉</h2>
              <p className="wish-text">
                I wish for you to have the happiest birthday ever!
                <br /><br />
                My biggest wish is that you become my waifey - my partner for life, my best friend, and my everything. I dream of building a beautiful home together, creating memories in every corner, and filling it with laughter and love. I can't wait to start a family with you, to see you as a mother, and to raise our 4 children together inshallah with all the love and happiness we share. 
                <br /><br />
                You are the one I want to grow old with, to share every moment with, and to build our forever together. I love you so much, Kamilia
              </p>
              <div className="confetti-effect">
                
                <HelloKittyIcon size={24} />
              </div>
            </motion.div>
          )}

          <div className="special-message">
            <h3>💌 A Special Surprise 💌</h3>
            <p>
              Every moment with you is a gift. You make my life complete, 
              and I'm so grateful to have you in my life. 
              Just remember that when we met IWTFUSHUYCW.
              <br />
              Happy Birthday my lovely and beautiful Kamilia
              
            </p>
            {!showCake && (
              <div className="hint-message">
                <p className="hint-text">Click on the candle above to blow it out and reveal a special wish</p>
              </div>
            )}
            <div className="hearts">
              <FaHeart />
              <FaHeart />
              <FaHeart />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SpecialMessage;

