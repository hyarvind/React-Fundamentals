// MsgBox.jsx
import React from 'react';
import './MsgBox.css';
const MsgBox = ({ userName, textColor }) => {
  return (
    <div  className="Product" style={{ color: textColor }}>
      <p>Hello, {userName}!</p>
    </div>
  );
};

export default MsgBox;  // Ensure this line is there
