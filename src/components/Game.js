import React, { useState } from 'react';

const Game = () => {
  const [stage, setStage] = useState("Karting");
  const [race, setRace] = useState(1);
  const [log, setLog] = useState([]);

  const raceNow = () => {
    const result = Math.random() > 0.5 ? "P1" : "P5";
    setLog([...log, `${stage} - Race ${race}: Finished ${result}`]);

    if (race >= 15) {
      if (stage === "Karting") setStage("F4");
      else if (stage === "F4") setStage("F3");
      else if (stage === "F3") setStage("F2");
      else if (stage === "F2") setStage("F1");
      setRace(1);
    } else {
      setRace(race + 1);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Segoe UI' }}>
      <h1>🏁 Racing Career Sim</h1>
      <h2>Current Tier: {stage}</h2>
      <h3>Race {race} of 15</h3>
      <button onClick={raceNow} style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>Race!</button>
      <ul>
        {log.map((entry, idx) => <li key={idx}>{entry}</li>)}
      </ul>
    </div>
  );
};

export default Game;
