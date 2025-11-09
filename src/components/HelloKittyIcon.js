import React from 'react';
import './HelloKittyIcon.css';

const HelloKittyIcon = ({ size = 24, className = '' }) => {
  return (
    <span 
      className={`hello-kitty-icon ${className}`} 
      style={{ 
        display: 'inline-block',
        lineHeight: 1,
        verticalAlign: 'middle'
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="hello-kitty-svg"
      >
        {/* Left Ear */}
        <ellipse cx="25" cy="20" rx="10" ry="12" fill="white" stroke="black" strokeWidth="2.5"/>
        <ellipse cx="25" cy="20" rx="6" ry="8" fill="white"/>
        
        {/* Right Ear with Bow */}
        <ellipse cx="75" cy="20" rx="10" ry="12" fill="white" stroke="black" strokeWidth="2.5"/>
        <ellipse cx="75" cy="20" rx="6" ry="8" fill="white"/>
        
        {/* Red Bow on Right Ear */}
        <path d="M 78 12 L 82 8 L 86 12 L 82 16 Z" fill="#FF0000" stroke="black" strokeWidth="1.5"/>
        <circle cx="82" cy="12" r="2.5" fill="#FF0000"/>
        
        {/* Head */}
        <circle cx="50" cy="50" r="35" fill="white" stroke="black" strokeWidth="2.5"/>
        
        {/* Left Eye */}
        <ellipse cx="40" cy="48" rx="3.5" ry="5" fill="black"/>
        
        {/* Right Eye */}
        <ellipse cx="60" cy="48" rx="3.5" ry="5" fill="black"/>
        
        {/* Yellow Nose */}
        <ellipse cx="50" cy="58" rx="2.5" ry="2" fill="#FFD700" stroke="black" strokeWidth="1.2"/>
      </svg>
    </span>
  );
};

export default HelloKittyIcon;

