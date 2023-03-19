import React from 'react';
import { Player } from '../../../type';
import MissArea from '../MissArea/MissArea';
import PointArea from '../PointArea/PointArea';
import { useModalPointDetail } from '../../../useModalPointDetail';

const PlayerState = (player: Player) => {
  const { serve, goToSelectServe } = useModalPointDetail();

  return (
    <div className="player">
      <div className="playerName">{player !== null ? player.name : null}</div>
      <button
        className="serveButton"
        style={{ backgroundColor: serve === null ? '#ffff00' : '' }}
        disabled={serve !== null}
        onClick={() => goToSelectServe()}
      >
        サーブ
      </button>
      <div className="pointDetail">
        <PointArea />
        <MissArea />
      </div>
    </div>
  );
};

export default PlayerState;
