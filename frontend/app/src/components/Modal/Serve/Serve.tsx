import React, { useState } from 'react';
import { FIRST_SERVE, SECOND_SERVE, useModalPointDetail } from '../../../useModalPointDetail';
import { useLocation } from 'react-router-dom';
import { PlayerNo } from '../../../type';

const Serve = () => {
  const { serve, selectServe, addDoubleFault, backToSelectServisePlayer } = useModalPointDetail();
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [playerNo, _] = useState<PlayerNo>(location.state as PlayerNo);

  return (
    <div className="detailArea">
      <h2>サーブの種類を選択</h2>
      <div>
        <button
          className="detailButton"
          onClick={() => selectServe(FIRST_SERVE, playerNo)}
          style={{ backgroundColor: serve === FIRST_SERVE ? '#ffff00' : '' }}
        >
          ファーストサーブ
        </button>
      </div>
      <div>
        <button
          className="detailButton"
          onClick={() => selectServe(SECOND_SERVE, playerNo)}
          style={{ backgroundColor: serve === SECOND_SERVE ? '#ffff00' : '' }}
        >
          セカンドサーブ
        </button>
      </div>
      <div>
        <button className="detailButton" onClick={() => addDoubleFault(playerNo)}>
          ダブルフォルト
        </button>
      </div>
      <div>
        <button
          className="buckButton"
          onClick={() => {
            backToSelectServisePlayer();
          }}
        >
          戻る
        </button>
      </div>
    </div>
  );
};

export default Serve;
