import React from 'react';
import { useCreatePlayer } from '../../../useCreatePlayer';

const Singles = () => {
  const { playerList } = useCreatePlayer();
  console.log(playerList);

  return (
    <>
      <div className="player_1">
        <div>名前1</div>
        <div className="pointDetail">
          <div>ポイント</div>
          <div>ミス</div>
        </div>
      </div>

      <div>ゲームカウント</div>
      <div className="player_1">
        <div>名前2</div>
        <div className="pointDetail">
          <div>ポイント</div>
          <div>ミス</div>
        </div>
      </div>
    </>
  );
};

export default Singles;
