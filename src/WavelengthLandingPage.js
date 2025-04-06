import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function WavelengthLandingPage() {
  const [showRules, setShowRules] = useState(false);

  const handleCreateRoom = () => {
    alert('Room Created! Share the room code with your friends.');
  };

  const handleJoinRoom = () => {
    alert('Joined Room! Enjoy the game with your friends.');
  };

  const toggleRules = () => {
    setShowRules(prev => !prev);
  };

  // Shared style for boxes (instructions and game rules)
  const boxStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'left',
    marginBottom: '1.5rem'
  };

  const headingStyle = { marginTop: 0, color: '#333' };
  const paragraphStyle = { color: '#555', fontSize: '1rem', margin: '0.5rem 0' };

  return (
    <motion.div
      className="wavelength-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        fontFamily: 'Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #F0F4F8, #D9E2EC)',
        padding: '20px'
      }}
    >
      <motion.h1
        style={{
          color: '#333',
          fontSize: '2.5rem',
          marginBottom: '1rem',
          fontWeight: '600'
        }}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Welcome to Wavelength
      </motion.h1>

      {/* Instructions Block */}
      <motion.div
        style={boxStyle}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 style={headingStyle}>How to Play</h2>
        <p style={paragraphStyle}>
          Click <strong>Create Room</strong> to start a new game, or enter an existing room code and click <strong>Join Room</strong> to join.
        </p>
        <p style={paragraphStyle}>
          Share the room code with your friends so everyone can join the fun!
        </p>
      </motion.div>

      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '1.5rem'
        }}
      >
        <motion.button
          onClick={handleCreateRoom}
          style={{
            padding: '12px',
            fontSize: '1rem',
            backgroundColor: '#A8D5BA',
            color: '#333',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Create Room
        </motion.button>

        <motion.input
          type="text"
          placeholder="Room Code"
          style={{
            padding: '12px',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '8px',
            outline: 'none',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />

        <motion.button
          onClick={handleJoinRoom}
          style={{
            padding: '12px',
            fontSize: '1rem',
            backgroundColor: '#A0C4E3',
            color: '#333',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Join Room
        </motion.button>

        <motion.button
          onClick={toggleRules}
          style={{
            padding: '12px',
            fontSize: '1rem',
            backgroundColor: '#FFE0B2',
            color: '#333',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {showRules ? 'Hide Game Rules' : 'Show Game Rules'}
        </motion.button>
      </motion.div>

      {/* Game Rules Section */}
      <AnimatePresence>
        {showRules && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            style={boxStyle}
          >
            <h2 style={headingStyle}>Game Rules</h2>
            <ul style={{ color: '#555', fontSize: '1rem', paddingLeft: '20px' }}>
              <li>Each round, one player gives a clue to guess the correct card.</li>
              <li>Other players select cards that best match the clue.</li>
              <li>The clue giver ranks the cards, awarding points based on similarity.</li>
              <li>The player with the highest score wins the round.</li>
              <li>Keep the game mellow and fun!</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default WavelengthLandingPage;