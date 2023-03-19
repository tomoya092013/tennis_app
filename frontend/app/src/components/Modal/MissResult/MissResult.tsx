import React from 'react';
import { NET, BACK_OUT, SIDE_OUT, Etc, useModalPointDetail } from '../../../useModalPointDetail';

const MissResult = () => {
  const { missResult, selectMissResult, backToCourse } = useModalPointDetail();
  return (
    <div className="detailArea">
      <h2>ミスした結果を選択</h2>

      <div>
        <button
          className="detailButton"
          onClick={() => {
            selectMissResult(NET);
          }}
          style={{ backgroundColor: missResult === NET ? '#ffff00' : '' }}
        >
          ネット
        </button>
        <button
          className="detailButton"
          onClick={() => {
            selectMissResult(BACK_OUT);
          }}
          style={{ backgroundColor: missResult === BACK_OUT ? '#ffff00' : '' }}
        >
          バックアウト
        </button>
      </div>
      <div>
        <button
          className="detailButton"
          onClick={() => {
            selectMissResult(SIDE_OUT);
          }}
          style={{ backgroundColor: missResult === SIDE_OUT ? '#ffff00' : '' }}
        >
          サイドアウト
        </button>
        <button
          className="detailButton"
          onClick={() => {
            selectMissResult(Etc);
          }}
          style={{ backgroundColor: missResult === Etc ? '#ffff00' : '' }}
        >
          その他
        </button>
      </div>

      <div>
        <button
          className="buckButton"
          onClick={() => {
            backToCourse();
          }}
        >
          戻る
        </button>
      </div>
    </div>
  );
};

export default MissResult;
