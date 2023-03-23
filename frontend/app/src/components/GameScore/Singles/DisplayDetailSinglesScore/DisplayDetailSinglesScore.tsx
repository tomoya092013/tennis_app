import React from 'react';
import PointOrMissArea from '../../PointOrMissArea/PointOrMissAre';
const DisplayDetailSinglesScore = () => {
  return (
    <div className="displayDetailSingles">
      <div className="displayPointorMiss">
        <PointOrMissArea playerNo="player1" pointOrMiss="point" />
        <PointOrMissArea playerNo="player1" pointOrMiss="miss" />
      </div>
      <div className="pointScore">1 - 1</div>
      <div className="displayPointorMiss">
        <PointOrMissArea playerNo="player2" pointOrMiss="point" />
        <PointOrMissArea playerNo="player2" pointOrMiss="miss" />
      </div>
    </div>
  );
};

export default DisplayDetailSinglesScore;
