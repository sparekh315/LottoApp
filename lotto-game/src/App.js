import React from 'react';
import Lottery from './Components/Lottery';
import './App.css';


function App() {
  return (
    <div className="App">
    <h1>Lotto Game!</h1>
      <Lottery />
      <Lottery title='Mini Daily' maxNum={10} numBalls={4}/> 
    </div>
  );
}

export default App;
