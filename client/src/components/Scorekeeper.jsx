import React from 'react';

const Scorekeeper = ({playerNumber, score}) => {
  return (
    <div className="playerStatus">
      <h1>Player {playerNumber} Wins</h1>
      <p>{score}</p>
    </div>
  );
};

export default Scorekeeper;