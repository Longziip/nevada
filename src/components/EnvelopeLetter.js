import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './EnvelopeLetter.css';

const EnvelopeLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setIsFlipped(true), 300);
    }
  };

  const message = `My Dearest Kamilia 🧸,

On this special day, I want you to know how incredibly amazing you are! You bring so much joy, love, and happiness into my life every single day.

Your ocean eyes are like the deepest sea, and I could get lost in them forever. You're strong, beautiful, and inspiring. And when you ride your Kawazaki inshallah, you'll be absolutely breathtaking - so free and full of life! 🏍️✨

I want you to know that I wasn't against you when you decided to buy a bike. I wanted to support you with all my heart, but I was afraid - not because I didn't believe in you, but because you mean everything to me. The thought of losing you terrifies me because I can't imagine my life with anyone else. You are my world, my everything, and I love you more than words can express.

You are not just my girlfriend, but my best friend, my partner, and my greatest blessing. Your passion for anime and the freedom you feel on the road - it's all part of what makes you so uniquely amazing.

I hope this birthday brings you all the happiness you deserve and more. May all your dreams come true, and may you always know how loved and cherished you are.

Happy Birthday, my beautiful Kamilia! 🎉💕🧸🏍️🌊

With all my love,
Zipry 💖`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="envelope-container"
    >
      {!isOpen ? (
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 0 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleEnvelopeClick}
          className="envelope-closed"
        >
          <div className="envelope-body">
            <div className="envelope-flap"></div>
            <div className="envelope-seal">🧸</div>
          </div>
          <p className="envelope-hint">Click to open! 💌</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotateY: -180, scale: 0.8 }}
          animate={{ rotateY: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="letter-open"
        >
          <div className="letter-content">
            <div className="letter-header">
              <span className="letter-heart">💕</span>
              <h3>A Special Letter For You 🧸</h3>
              <span className="letter-heart">💕</span>
            </div>
            <div className="letter-body">
              <pre className="letter-text">{message}</pre>
            </div>
            <div className="letter-footer">
              <span className="letter-kiss">💋</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default EnvelopeLetter;

