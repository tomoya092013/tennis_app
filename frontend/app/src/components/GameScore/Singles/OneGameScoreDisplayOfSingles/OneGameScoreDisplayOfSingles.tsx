import React from 'react';
import PointCount from '../../PointCount/PointCount';
import PointOrMissArea from '../../PointOrMissArea/PointOrMissAre';

type Props = {
  gameOrder: number;
};
const OneGameScoreDisplayOfSingles = ({ gameOrder }: Props) => {
  return (
    <div className="displaySingles">
      <div className="displayPointOrMiss">
        <PointOrMissArea playerNo="player1" pointOrMiss="point" gameOrder={gameOrder} />
        <PointOrMissArea playerNo="player1" pointOrMiss="miss" gameOrder={gameOrder} />
      </div>
      <PointCount gameOrder={gameOrder} />
      <div className="displayPointOrMiss">
        <PointOrMissArea playerNo="player2" pointOrMiss="point" gameOrder={gameOrder} />
        <PointOrMissArea playerNo="player2" pointOrMiss="miss" gameOrder={gameOrder} />
      </div>
    </div>
  );
};

export default OneGameScoreDisplayOfSingles;
