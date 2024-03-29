import React from 'react';

import { FIRST_SERVE, SECOND_SERVE, useModalPointDetail } from '../../../hooks/useModalPointDetail';
import { useValidatePages } from '../../../hooks/useValidatePage';
import { useServeData } from '../../../hooks/useServeData';

const Serve = () => {
  const { servicePlayer, serve, backToSelectServisePlayer } = useModalPointDetail();
  const { selectServe, addDoubleFaultOrServiceAce } = useServeData(servicePlayer);
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
        <button className="detailButton" onClick={() => addDoubleFaultOrServiceAce(SECOND_SERVE, 'Df')}>
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
