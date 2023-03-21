import React from 'react';
import { Player } from '../../../type';
import MissButton from '../MissButton/MissButton';
import PointButton from '../PointButton/PointButton';
import ServeButton from '../ServeButton/ServeButton';

const PlayerState = (player: Player) => {
  return (
    <div className="player">
      <div className="playerName">{player !== null ? player.name : null}</div>
      <ServeButton {...player} />
      <div className="pointDetail">
        <PointButton {...player} />
        <MissButton {...player} />
      </div>
    </div>
  );
};

export default PlayerState;
