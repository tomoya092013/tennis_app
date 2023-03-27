import React from 'react';
import { useGameScore } from '../../../useGameScore';

type Props = {
  gameOrder: number;
};

const PointCount = ({ gameOrder }: Props) => {
  const { singlesGamePoint } = useGameScore();

  return (
    <div className="pointCount">
      {singlesGamePoint[gameOrder].team1Point} - {singlesGamePoint[gameOrder].team2Point}
    </div>
  );
};

export default PointCount;
