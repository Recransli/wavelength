import React from 'react';
import { motion } from 'framer-motion';

function WavelengthLandingPage() {
  const handleCreateRoom = () => {
    alert('Room Created! Share the room code with your friends.');
  };

  const handleJoinRoom = () => {
    alert('Joined Room! Enjoy the game with your friends.');
  };

  return (
    <motion.div
      className="wavelength-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        fontFamily: 'Roboto, sans-serif', // Modern font style
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #F0F4F8, #D9E2EC)', // soft pastel gradient
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
      
      <motion.p
        style={{
          color: '#555',
          fontSize: '1.125rem',
          marginBottom: '2rem'
        }}
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Experience the ultimate guessing game with your friends!
      </motion.p>
      
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: '400px'
        }}
      >
        <motion.button
          onClick={handleCreateRoom}
          style={{
            padding: '12px',
            fontSize: '1rem',
            backgroundColor: '#A8D5BA', // soft pastel green
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
            backgroundColor: '#A0C4E3', // soft pastel blue
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
      </motion.div>
    </motion.div>
  );
}

export default WavelengthLandingPage;