import React from 'react';

import { useModalPointDetail } from '../../../hooks/useModalPointDetail';
import { useValidatePages } from '../../../hooks/useValidatePage';
import { useServeData } from '../../../hooks/useServeData';

const ServeResult = () => {
  const { serve, rally, selectRally, backToServe, servicePlayer } = useModalPointDetail();
  const { useValidateServeResult } = useValidatePages();
  const { addDoubleFaultOrServiceAce } = useServeData(servicePlayer);

  useValidateServeResult(serve);

  return (
    <div className="detailArea">
      <h2>サーブの結果を選択</h2>
      <div>
        <button className="detailButton" onClick={() => addDoubleFaultOrServiceAce(serve, 'Sa')}>
          サービスエース
        </button>
      </div>
      <div>
        <button
          className="detailButton"
          onClick={() => selectRally()}
          style={{ backgroundColor: rally ? '#ffff00' : '' }}
        >
          ラリー
        </button>
      </div>

      <div>
        <button className="buckButton" onClick={() => backToServe()}>
          戻る
        </button>
      </div>
    </div>
  );
};

export default ServeResult;
