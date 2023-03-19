import React from 'react';
import { Player } from '../../../type';
import { useCreatePlayer } from '../../../useCreatePlayer';
import { useModalPointDetail } from '../../../useModalPointDetail';
import GameCount from '../GameCount/GameCount';
import PlayerState from '../PlayerState/PlayerState';

const Singles = () => {
  const { backToServeResult } = useModalPointDetail();
  const { serve } = useModalPointDetail();
  const { playerList } = useCreatePlayer();
  if (playerList.length < 2) return null;

  const player_1: Player = playerList[0];
  const player_2: Player = playerList[1];

  return (
    <div className="gameScore">
      <PlayerState {...player_1} />
      <GameCount />
      <PlayerState {...player_2} />
      <div className="backToServeResult">
        {serve !== null ? (
          <button
            className="backToServeResultButton"
            onClick={() => {
              backToServeResult();
            }}
          >
            戻る
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Singles;
