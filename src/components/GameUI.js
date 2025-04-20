import React, { useState } from 'react';
import Inbox from './Inbox';
import Race from './Race';
import Stats from './Stats';
import Standings from './Standings';

const GameUI = () => {
  const [screen, setScreen] = useState('Race');

  const renderScreen = () => {
    switch (screen) {
      case 'Inbox': return <Inbox />;
      case 'Stats': return <Stats />;
      case 'Standings': return <Standings />;
      default: return <Race />;
    }
  };

  return (
    <div style={{ fontFamily: 'Segoe UI', paddingBottom: '60px' }}>
      {renderScreen()}
      <nav style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        display: 'flex', justifyContent: 'space-around',
        backgroundColor: '#111', color: 'white', padding: '1rem 0'
      }}>
        <button onClick={() => setScreen('Race')}>Race</button>
        <button onClick={() => setScreen('Inbox')}>Inbox</button>
        <button onClick={() => setScreen('Stats')}>Stats</button>
        <button onClick={() => setScreen('Standings')}>Standings</button>
      </nav>
    </div>
  );
};

export default GameUI;
