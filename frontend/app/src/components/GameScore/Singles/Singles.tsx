import React from 'react';
import { Player } from '../../../type';
import { useCreatePlayer } from '../../../useCreatePlayer';
import GameCount from '../GameCount/GameCount';
import PlayerState from '../PlayerState/PlayerState';

const Singles = () => {
  const { playerList } = useCreatePlayer();
  if (playerList.length < 2) return null;

  const player_1: Player = playerList[0];
  const player_2: Player = playerList[1];

  return (
    <div className="gameScore">
      <PlayerState {...player_1} />
      <GameCount />
      <PlayerState {...player_2} />
    </div>
  );
};

export default Singles;
