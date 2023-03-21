import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PlayerNo } from '../../../type';
import { useModalPointDetail } from '../../../useModalPointDetail';
import { useValidatePages } from '../../../useValidatePage';

const ServeResult = () => {
  const { serve, rally, addServiceAce, selectRally, backToServe } = useModalPointDetail();
  const { useValidateSelectServe } = useValidatePages();
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [playerNo, _] = useState<PlayerNo>(location.state as PlayerNo);

  useValidateSelectServe(serve);

  return (
    <div className="detailArea">
      <h2>サーブの結果を選択</h2>
      <div>
        <button className="detailButton" onClick={() => addServiceAce(playerNo)}>
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
