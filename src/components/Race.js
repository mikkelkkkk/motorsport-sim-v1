import React, { useState } from 'react';

const Race = () => {
  const [result, setResult] = useState(null);

  const simulateRace = () => {
    const outcomes = ['P1', 'P2', 'P5', 'P10', 'DNF'];
    const choice = outcomes[Math.floor(Math.random() * outcomes.length)];
    setResult(choice);
  };

  return (
    <div>
      <h2>Race Simulation</h2>
      <p>{result ? `You finished: ${result}` : 'Ready to race!'}</p>
      <button onClick={simulateRace}>Start Race</button>
    </div>
  );
};

export default Race;
