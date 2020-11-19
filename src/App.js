import React from 'react';
import './App.css';

import SimpleCounterWrapper from './components/simpleCounterContainer';
import CustomCounterWrapper from './components/customCounterContainer';

function App() {
  return (
    <div className="App">
      <SimpleCounterWrapper />
      <CustomCounterWrapper />
    </div>
  );
}

export default App;
