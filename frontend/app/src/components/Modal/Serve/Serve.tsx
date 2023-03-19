import React from 'react';
import { FIRST_SERVE, SECOND_SERVE, useModalPointDetail } from '../../../useModalPointDetail';

const Serve = () => {
  const { serve, selectServe, addDoubleFault } = useModalPointDetail();

  return (
    <div className="detailArea">
      <h2>サーブの種類を選択</h2>
      <div>
        <button
          className="detailButton"
          onClick={() => selectServe(FIRST_SERVE)}
          style={{ backgroundColor: serve === FIRST_SERVE ? '#ffff00' : '' }}
        >
          ファーストサーブ
        </button>
      </div>
      <div>
        <button
          className="detailButton"
          onClick={() => selectServe(SECOND_SERVE)}
          style={{ backgroundColor: serve === SECOND_SERVE ? '#ffff00' : '' }}
        >
          セカンドサーブ
        </button>
      </div>
      <div>
        <button className="detailButton" onClick={() => addDoubleFault()}>
          ダブルフォルト
        </button>
      </div>
      <div>
        <button className="buckButton" onClick={() => addDoubleFault()}>
          戻る
        </button>
      </div>
    </div>
  );
};

export default Serve;
