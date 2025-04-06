import React from 'react';
import { useParams } from 'react-router-dom';

function GameBoard() {
  const { roomId } = useParams(); // Capture the room ID from the URL

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Game Room: {roomId}</h2>
      <div className="card-area" style={{ marginTop: '20px' }}>
        <p>This is where your cards will appear.</p>
      </div>
      <div className="player-info" style={{ marginTop: '20px' }}>
        <p>Player information will go here.</p>
      </div>
    </div>
  );
}

export default GameBoard;