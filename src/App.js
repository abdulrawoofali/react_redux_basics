import React from 'react';
import './App.css';

import SimpleCounterWrapper from './components/simpleCounterContainer';
import CustomCounterWrapper from './components/customCounterContainer';
import Display from './components/display';

function App() {
  return (
    <div className="App">
      <SimpleCounterWrapper />
      <CustomCounterWrapper />
      <div>
        <Display />
      </div>
    </div>
  );
}

export default App;
