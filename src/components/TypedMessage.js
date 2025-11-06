import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './TypedMessage.css';

const messages = [
  'Your ocean eyes captivate me every day! ',
  'You\'re as amazing like Alya and Marin! ✨ ',
  'Riding with you is gonna bethe best adventure! 🏍️ ',
  'I love you more than words can say! 💖',
  'Wishing you the happiest birthday ever! 🎉 ',
  'You make my life beautiful like your eyes! 🌸 ',
];

const TypedMessage = () => {

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    let timeout;

    if (!isDeleting && displayedText.length < currentMessage.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(currentMessage.substring(0, displayedText.length + 1));
        setTypingSpeed(50);
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentMessage.length) {
      // Finished typing, wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(30);
      }, 2000);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentMessage.substring(0, displayedText.length - 1));
        setTypingSpeed(30);
      }, typingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      // Finished deleting, move to next message
      setIsDeleting(false);
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      setTypingSpeed(50);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentMessageIndex, typingSpeed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="typed-container"
    >
      <div className="typed-box">
        <span className="typed-text">
          {displayedText}
          <span className="cursor">|</span>
        </span>
      </div>
    </motion.div>
  );
};

export default TypedMessage;

