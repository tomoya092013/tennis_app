import React from 'react';
import { useGameScore } from '../../../useGameScore';

const PointCount = () => {
  const { singlesPointCount } = useGameScore();
  return (
    <div className="pointCount">
      {singlesPointCount.team1Point} -{singlesPointCount.team2Point}
    </div>
  );
};

export default PointCount;
