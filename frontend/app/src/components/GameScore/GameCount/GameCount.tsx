import React from 'react';
import { useRecoilValue } from 'recoil';
import { singlesGameCountState } from '../../../store';
import { useGameScore } from '../../../useGameScore';

const GameCount = () => {
  const singlesGameCount = useRecoilValue(singlesGameCountState);
  const { useAddGameCount } = useGameScore();
  useAddGameCount();

  return (
    <div className="gameCount">
      <div>
        {singlesGameCount.team1Game.length} - {singlesGameCount.team2Game.length}
      </div>
    </div>
  );
};

export default GameCount;
