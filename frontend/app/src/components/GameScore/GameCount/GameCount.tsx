import React from 'react';
import { useGameScore } from '../../../useGameScore';

const GameCount = () => {
  const { team1GameCount, team2GameCount, singlesGameCount, useAddGameCount } = useGameScore();
  useAddGameCount();
  const winner = singlesGameCount.winner;

  return (
    <div className="gameCount">
      <div className={winner && winner === 'team1' ? 'winner' : 'teamGame'}>{team1GameCount}</div>-
      <div className={winner && winner === 'team2' ? 'winner' : 'teamGame'}>{team2GameCount}</div>
    </div>
  );
};

export default GameCount;
