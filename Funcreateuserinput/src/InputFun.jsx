import React, { useState } from 'react';
import './MsgBox.css';

const InputFun = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [boxColor, setBoxColor] = useState(''); // New state for box color

  const handleSubmit = () => {
    onSubmit(name, color);  // Pass name and color to the parent (App)
    setBoxColor(color); // Set the background color of the new div
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        className="input"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        type="color"
        className="inputcolor"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button id="button" onClick={handleSubmit}>Submit</button>

      {/* New div that changes color */}
      {boxColor && (
        <div
          style={{
            backgroundColor: boxColor,  // Set background color based on color state
            width: '400px',
            height: '100px',
            marginTop: '20px',
            marginBottom:'20px',
            textAlign: 'center',
            lineHeight: '200px',
            color: '#fff',
            borderRadius: '10px',
          }}
        >
        </div>
      )}
    </div>
  );
};

export default InputFun;
