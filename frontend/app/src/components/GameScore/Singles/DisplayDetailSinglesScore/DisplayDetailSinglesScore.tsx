import React from 'react';
import PointCount from '../../PointCount/PointCount';
import PointOrMissArea from '../../PointOrMissArea/PointOrMissAre';
const DisplayDetailSinglesScore = () => {
  return (
    <div className="displaySingles">
      <div className="displayPointOrMiss">
        <PointOrMissArea playerNo="player1" pointOrMiss="point" />
        <PointOrMissArea playerNo="player1" pointOrMiss="miss" />
      </div>
      <PointCount />
      <div className="displayPointOrMiss">
        <PointOrMissArea playerNo="player2" pointOrMiss="point" />
        <PointOrMissArea playerNo="player2" pointOrMiss="miss" />
      </div>
    </div>
  );
};

export default DisplayDetailSinglesScore;
