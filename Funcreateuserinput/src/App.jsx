import './App.css';
import { useState } from 'react';
import InputFun from './InputFun';
import MsgBox from './MsgBox';  // Ensure MsgBox is imported


function App() {
  const [userInput, setUserInput] = useState('');
  const [userColor, setUserColor] = useState('');

  const handleUserInput = (name, color) => {
    setUserInput(name);
    setUserColor(color);
  };

  return (
    <>
      <InputFun onSubmit={handleUserInput} />
      <MsgBox userName={userInput} textColor={userColor} />
    </>
  );
}

export default App;
