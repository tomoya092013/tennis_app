import React from 'react';
import { FIRST_SERVE, SECOND_SERVE, useModalPointDetail } from '../../../useModalPointDetail';
import { useValidatePages } from '../../../useValidatePage';

const Serve = () => {
  const { servicePlayer, serve, selectServe, addDoubleFault, backToSelectServisePlayer } = useModalPointDetail();
  const { useValidateSelectServe } = useValidatePages();
  useValidateSelectServe(servicePlayer);

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
