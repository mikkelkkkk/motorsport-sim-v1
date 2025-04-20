import React, { useState } from 'react';
import Race from './Race';
import Inbox from './Inbox';
import Stats from './Stats';
import Standings from './Standings';

const Menu = () => {
  const [screen, setScreen] = useState("Race");

  const renderScreen = () => {
    switch(screen) {
      case "Inbox": return <Inbox />;
      case "Stats": return <Stats />;
      case "Standings": return <Standings />;
      default: return <Race />;
    }
  };

  return (
    <div style={{ fontFamily: 'Segoe UI', padding: '1rem' }}>
      {renderScreen()}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#111', color: '#fff', display: 'flex', justifyContent: 'space-around', padding: '1rem 0' }}>
        <button onClick={() => setScreen("Race")}>Race</button>
        <button onClick={() => setScreen("Inbox")}>Inbox</button>
        <button onClick={() => setScreen("Stats")}>Stats</button>
        <button onClick={() => setScreen("Standings")}>Standings</button>
      </div>
    </div>
  );
};

export default Menu;
