import React from 'react';
import './App.css';
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
      className="WavelengthLandingPage"
      style={{
        textAlign: 'center',
        marginTop: '50px',
        maxWidth: '600px',
        margin: '0 auto'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        style={{ marginBottom: '20px' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Wavelength
      </motion.h1>
      
      <motion.p 
        style={{ marginBottom: '20px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Experience the ultimate guessing game with your friends!
      </motion.p>
      
      <motion.div 
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.button 
          onClick={handleCreateRoom}
          style={{
            padding: '10px',
            backgroundColor: '#3f51b5',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Create Room
        </motion.button>
        
        <motion.input 
          type="text"
          placeholder="Room Code"
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '100%'
          }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        />
        
        <motion.button 
          onClick={handleJoinRoom}
          style={{
            padding: '10px',
            backgroundColor: '#f50057',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Join Room
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default WavelengthLandingPage;