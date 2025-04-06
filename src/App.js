// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WavelengthLandingPage from './WavelengthLandingPage';
import GameBoard from './GameBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WavelengthLandingPage />} />
        <Route path="/room/:roomId" element={<GameBoard />} />
      </Routes>
    </Router>
  );
}

export default App;