import React from 'react';
import { Player } from '../../../type';
import { useCreatePlayer } from '../../../useCreatePlayer';
import GameCount from '../GameCount/GameCount';
import PlayerState from '../PlayerState/PlayerState';

const Singles = () => {
  const { playerList } = useCreatePlayer();
  const player_1: Player | null = playerList !== null ? playerList[0] : null;
  const player_2: Player | null = playerList !== null ? playerList[1] : null;

  return (
    <div className="gameScore">
      {/* <div className="player_1"> */}
      {/* <button className="playerName" style={{ backgroundColor: serve ? '#ffff00' : '' }} disabled={!serve}>
          {playerList !== null ? playerList[0].name : null}
        </button> */}
      <PlayerState player={player_1} />
      {/* <div className="pointDetail"> */}
      {/* <button
            className="pointArea"
            style={{ backgroundColor: pointDetail ? '#fcbcdb' : '' }}
            disabled={!pointDetail}
          >
            ポイント
          </button> */}
      {/* <button
            className="missArea"
            style={{ backgroundColor: pointDetail ? '#d6ecff' : '' }}
            disabled={!pointDetail}
          >
            ミス
          </button> */}
      {/* </div> */}
      {/* </div> */}

      <GameCount />

      {/* <div className="player_1"> */}
      {/* <button className="playerName" style={{ backgroundColor: serve ? '#ffff00' : '' }} disabled={!serve}>
          {playerList !== null ? playerList[1].name : null}
        </button> */}
      <PlayerState player={player_2} />
      {/* <div className="pointDetail"> */}
      {/* <button
            className="missArea"
            style={{ backgroundColor: pointDetail ? '#d6ecff' : '' }}
            disabled={!pointDetail}
          >
            ミス
          </button> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Singles;
