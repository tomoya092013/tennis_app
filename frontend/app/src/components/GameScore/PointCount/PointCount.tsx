import React from 'react';
import { useGameScore } from '../../../useGameScore';

type Props = {
  gameOrder: number;
};

const PointCount = ({ gameOrder }: Props) => {
  const { singlesGameCount, singlesGamePoint } = useGameScore();
  const winTeam = singlesGameCount.everyGameWinner[gameOrder];

  return (
    <div className="pointCount">
      <div className={winTeam === 'team1' ? 'getGame' : 'teamPoint'}> {singlesGamePoint[gameOrder].team1Point}</div>-
      <div className={winTeam === 'team2' ? 'getGame' : 'teamPoint'}>{singlesGamePoint[gameOrder].team2Point}</div>
    </div>
  );
};

export default PointCount;
