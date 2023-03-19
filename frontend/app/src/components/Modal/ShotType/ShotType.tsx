import React from 'react';
import { RECEIVE, STROKE, VOLLEY, POACH_VOLLEY, SMASH, Etc, useModalPointDetail } from '../../../useModalPointDetail';

const ShotType = () => {
  const { shotType, backToForeOrBack, selectShotType } = useModalPointDetail();
  return (
    <div className="detailArea">
      <h2>球種を選択</h2>
      <div>
        <button
          className="detailButton"
          onClick={() => {
            selectShotType(RECEIVE);
          }}
          style={{ backgroundColor: shotType === RECEIVE ? '#ffff00' : '' }}
        >
          レシーブ
        </button>
        <button
          className="detailButton"
          onClick={() => {
            selectShotType(STROKE);
          }}
          style={{ backgroundColor: shotType === STROKE ? '#ffff00' : '' }}
        >
          ストローク
        </button>
      </div>
      <div>
        <button
          className="detailButton"
          onClick={() => {
            selectShotType(VOLLEY);
          }}
          style={{ backgroundColor: shotType === VOLLEY ? '#ffff00' : '' }}
        >
          ボレー
        </button>
        <button
          className="detailButton"
          onClick={() => {
            selectShotType(POACH_VOLLEY);
          }}
          style={{ backgroundColor: shotType === POACH_VOLLEY ? '#ffff00' : '' }}
        >
          ポーチボレー
        </button>
      </div>
      <div>
        <button
          className="detailButton"
          onClick={() => {
            selectShotType(SMASH);
          }}
          style={{ backgroundColor: shotType === SMASH ? '#ffff00' : '' }}
        >
          スマッシュ
        </button>
        <button
          className="detailButton"
          onClick={() => {
            selectShotType(Etc);
          }}
          style={{ backgroundColor: shotType === Etc ? '#ffff00' : '' }}
        >
          その他
        </button>
      </div>

      <div>
        <button
          className="buckButton"
          onClick={() => {
            backToForeOrBack();
          }}
        >
          戻る
        </button>
      </div>
    </div>
  );
};

export default ShotType;
