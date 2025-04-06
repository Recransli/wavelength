import logo from './logo.svg';
import './App.css';

import React from 'react';

function WavelengthLandingPage() {
  const handleCreateRoom = () => {
    alert('Room Created! Share the room code with your friends.');
  };

  const handleJoinRoom = () => {
    alert('Joined Room! Enjoy the game with your friends.');
  };

  return (
    <div className="WavelengthLandingPage" style={{ textAlign: 'center', marginTop: '50px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px' }}>
        Welcome to Wavelength
      </h1>
      <p style={{ marginBottom: '20px' }}>
        Experience the ultimate guessing game with your friends!
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <button onClick={handleCreateRoom} style={{ padding: '10px', backgroundColor: '#3f51b5', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>
          Create Room
        </button>
        <input type="text" placeholder="Room Code" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }} />
        <button onClick={handleJoinRoom} style={{ padding: '10px', backgroundColor: '#f50057', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>
          Join Room
        </button>
      </div>
    </div>
  );
}

export default WavelengthLandingPage;
