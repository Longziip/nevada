import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './BinaryMessage.css';

const BinaryMessage = () => {
  const [heartAscii, setHeartAscii] = useState('');

  const message = 'Happy Birthday Kamilia';
  
  useEffect(() => {
    const convertToBinary = (text) => {
      return text
        .split('')
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join(' ');
    };

    const binary = convertToBinary(message);

    // Create ASCII heart shape with binary
    const createHeartAscii = (binaryStr) => {
      // Better heart ASCII art pattern
      const heartPattern = [
        '    ░░  ░░    ',
        '  ░░░░░░░░░░  ',
        ' ░░░░░░░░░░░░ ',
        '░░░░░░░░░░░░░░',
        '░░░░░░░░░░░░░░',
        ' ░░░░░░░░░░░░ ',
        '  ░░░░░░░░░░  ',
        '   ░░░░░░░░   ',
        '    ░░░░░░    ',
        '     ░░░░     ',
        '      ░░      '
      ];

      // Remove spaces from binary string and get characters
      const binaryChars = binaryStr.replace(/\s/g, '').split('');
      let binaryIndex = 0;
      const maxChars = heartPattern.join('').split('░').length - 1;

      return heartPattern.map(line => {
        let newLine = '';
        for (let i = 0; i < line.length; i++) {
          if (line[i] === '░') {
            if (binaryIndex < maxChars && binaryIndex < binaryChars.length) {
              newLine += binaryChars[binaryIndex % binaryChars.length];
              binaryIndex++;
            } else if (binaryIndex < maxChars) {
              // Fill remaining with pattern
              newLine += binaryChars[binaryIndex % binaryChars.length];
              binaryIndex++;
            } else {
              newLine += '░';
            }
          } else {
            newLine += line[i];
          }
        }
        return newLine;
      }).join('\n');
    };

    setHeartAscii(createHeartAscii(binary));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="binary-container"
    >
      <div className="binary-box">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="binary-text"
        >
          <pre className="binary-heart">{heartAscii}</pre>
        </motion.div>
        <div className="binary-label">
        </div>
      </div>
    </motion.div>
  );
};

export default BinaryMessage;

