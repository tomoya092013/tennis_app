import React from 'react';
import { GamePlayer } from '../../../type';
import { POINT, useModalPointDetail } from '../../../useModalPointDetail';

const PointButton = (player: GamePlayer) => {
  const { pointOrMissButton, selectPointOrMiss } = useModalPointDetail();
  return (
    <button
      className="pointButton"
      onClick={() => selectPointOrMiss(POINT, player.playerNo)}
      style={{ backgroundColor: pointOrMissButton ? '#fcbcdb' : '' }}
      disabled={!pointOrMissButton}
    >
      ポイント
    </button>
  );
};

export default PointButton;
