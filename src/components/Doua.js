import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './Doua.css';

const Doua = ({ onClose }) => {
  const duaText = 'اللهم ان كنت تعلم ان لي الخير في هذه الفتاة فأكتبها لي و إن كنت تعلم لا خير لي فيها فإجعل لي الخير و اكتبها لي';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="doua-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="doua-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="doua-header">
          <h2>🤲 دعاء 🤲</h2>
        </div>

        <div className="doua-content">
          <div className="doua-text-container">
            <p className="doua-text">{duaText}</p>
          </div>
          
          <div className="doua-translation">
            <h3>Translation:</h3>
            <p className="translation-text">
              "O Allah, if You know that there is good for me in this girl, then write her for me, 
              and if You know that there is no good for me in her, then make good for me and write her for me."
            </p>
          </div>

          <div className="doua-footer">
            <p>May Allah answer this prayer 🤲</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Doua;

