import React from 'react';

import { MISS, useModalPointDetail } from '../../../hooks/useModalPointDetail';
import { GamePlayer } from '../../../type';

const MissButton = (player: GamePlayer) => {
  const { pointOrMissButton, selectPointOrMiss } = useModalPointDetail();
  return (
    <button
      className="missButton"
      onClick={() => selectPointOrMiss(MISS, player.playerNo)}
      style={{ backgroundColor: pointOrMissButton ? '#bce9fc' : '' }}
      disabled={!pointOrMissButton}
    >
      ミス
    </button>
  );
};

export default MissButton;
