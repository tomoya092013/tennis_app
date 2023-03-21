import React from 'react';
import { Player } from '../../../type';
import { useModalPointDetail } from '../../../useModalPointDetail';

const ServeButton = (player: Player) => {
  const { serve, selectServicePlayer } = useModalPointDetail();
  return (
    <button
      className="serveButton"
      style={{ backgroundColor: serve === null ? '#ffff00' : '' }}
      disabled={serve !== null}
      onClick={() => selectServicePlayer(player.playerNo)}
    >
      サーブ
    </button>
  );
};

export default ServeButton;
