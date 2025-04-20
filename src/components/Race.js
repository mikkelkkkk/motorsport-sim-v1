import React, { useState } from 'react';

const Race = () => {
  const [result, setResult] = useState(null);

  const simulateRace = () => {
    const outcomes = ["P1", "P2", "P5", "DNF"];
    const chosen = outcomes[Math.floor(Math.random() * outcomes.length)];
    setResult(chosen);
  };

  return (
    <div>
      <h2>Race Weekend</h2>
      {result ? <p>Result: {result}</p> : <p>Ready to race!</p>}
      <button onClick={simulateRace}>Start Race</button>
    </div>
  );
};

export default Race;
