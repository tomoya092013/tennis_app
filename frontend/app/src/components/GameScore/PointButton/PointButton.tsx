import React from 'react';
import { Player } from '../../../type';
import { POINT, useModalPointDetail } from '../../../useModalPointDetail';

const PointButton = (player: Player) => {
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
