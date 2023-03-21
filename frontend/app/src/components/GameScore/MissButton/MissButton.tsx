import React from 'react';
import { Player } from '../../../type';
import { MISS, useModalPointDetail } from '../../../useModalPointDetail';

const MissButton = (player: Player) => {
  const { serve, selectPointOrMiss } = useModalPointDetail();
  return (
    <button
      className="missButton"
      onClick={() => selectPointOrMiss(MISS, player.playerNo)}
      style={{ backgroundColor: serve === null ? '' : '#bce9fc' }}
      disabled={serve === null}
    >
      ミス
    </button>
  );
};

export default MissButton;
