import React from 'react';

import { useGameScore } from '../../../hooks/useGameScore';
import { useModalPointDetail } from '../../../hooks/useModalPointDetail';
import { GamePlayer } from '../../../type';

const ServeButton = (player: GamePlayer) => {
  const { serve, selectServicePlayer } = useModalPointDetail();
  const { singlesGameCount } = useGameScore();

  return (
    <button
      className="serveButton"
      style={{ backgroundColor: serve === null ? '#ffff00' : '' }}
      disabled={serve !== null || singlesGameCount.winner !== null}
      onClick={() => selectServicePlayer(player.playerNo)}
    >
      サーブ
    </button>
  );
};

export default ServeButton;
