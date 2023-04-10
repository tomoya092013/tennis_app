import React from 'react';
import { GamePlayer } from '../../../type';
import { MISS, useModalPointDetail } from '../../../useModalPointDetail';

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
