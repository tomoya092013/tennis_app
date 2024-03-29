import React from 'react';

import { BACK_HAND, FORE_HAND, useModalPointDetail } from '../../../hooks/useModalPointDetail';
import { useValidatePages } from '../../../hooks/useValidatePage';

const ForeOrBack = () => {
  const { foreOrBack, pointOrMissButton, selectForeOrBack, backToGameScoreFromForB } = useModalPointDetail();
  const { useValidateForeOrBack } = useValidatePages();

  useValidateForeOrBack(pointOrMissButton);

  return (
    <div className="detailArea">
      <h2>フォア or バック ？</h2>
      <div>
        <button
          className="detailButton"
          onClick={() => {
            selectForeOrBack(FORE_HAND);
          }}
          style={{ backgroundColor: foreOrBack === FORE_HAND ? '#ffff00' : '' }}
        >
          フォア
        </button>
      </div>
      <div>
        <button
          className="detailButton"
          onClick={() => {
            selectForeOrBack(BACK_HAND);
          }}
          style={{ backgroundColor: foreOrBack === BACK_HAND ? '#ffff00' : '' }}
        >
          バック
        </button>
      </div>

      <div>
        <button
          className="buckButton"
          onClick={() => {
            backToGameScoreFromForB();
          }}
        >
          戻る
        </button>
      </div>
    </div>
  );
};

export default ForeOrBack;
