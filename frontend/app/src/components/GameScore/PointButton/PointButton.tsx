import React from 'react';
import { Player } from '../../../type';
import { POINT, useModalPointDetail } from '../../../useModalPointDetail';

const PointButton = (player: Player) => {
  const { serve, selectPointOrMiss } = useModalPointDetail();
  return (
    <button
      className="pointButton"
      onClick={() => selectPointOrMiss(POINT, player.playerNo)}
      style={{ backgroundColor: serve === null ? '' : '#fcbcdb' }}
      disabled={serve === null}
    >
      ポイント
    </button>
  );
};

export default PointButton;
