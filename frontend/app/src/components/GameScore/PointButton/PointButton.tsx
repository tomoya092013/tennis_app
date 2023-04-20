import React from 'react';

import { POINT, useModalPointDetail } from '../../../hooks/useModalPointDetail';
import { GamePlayer } from '../../../type';

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
