import React from 'react';
import { useModalPointDetail } from '../../../useModalPointDetail';
import { useValidatePages } from '../../../useValidatePage';

const ServeResult = () => {
  const { serve, rally, addServiceAce, selectRally, backToServe } = useModalPointDetail();
  const { useValidateServeResult } = useValidatePages();

  useValidateServeResult(serve);

  return (
    <div className="detailArea">
      <h2>サーブの結果を選択</h2>
      <div>
        <button className="detailButton" onClick={() => addServiceAce()}>
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
