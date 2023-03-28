import React from 'react';
import { useGameScore } from '../../../useGameScore';

type Props = {
  gameOrder: number;
};

const PointCount = ({ gameOrder }: Props) => {
  const { singlseGameCount, singlesGamePoint } = useGameScore();
  const winTeam = singlseGameCount.everyGameWinner[gameOrder];

  return (
    <div className="pointCount">
      <div className={winTeam === 'team1Game' ? 'getGame' : 'teanPoint'}> {singlesGamePoint[gameOrder].team1Point}</div>
      -<div className={winTeam === 'team2Game' ? 'getGame' : 'teanPoint'}>{singlesGamePoint[gameOrder].team2Point}</div>
    </div>
  );
};

export default PointCount;
