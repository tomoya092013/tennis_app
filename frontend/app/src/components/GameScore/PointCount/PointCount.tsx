import React from 'react';
import { useGameScore } from '../../../useGameScore';

const PointCount = () => {
  const { SinglesGamePoint } = useGameScore();
  return (
    <div className="pointCount">
      {SinglesGamePoint.team1Point} -{SinglesGamePoint.team2Point}
    </div>
  );
};

export default PointCount;
