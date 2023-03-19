import React from 'react';
import { CROSS, REVERSE_CROSS, LEFT_STRATE, RIGHT_STRATE, useModalPointDetail } from '../../../useModalPointDetail';

const PoachCourse = () => {
  const { poachVolleyCourse, selectPoachVolleyCourse, backToShotType } = useModalPointDetail();
  return (
    <div className="detailArea">
      <h2>ポーチしたコースを選択</h2>

      <div>
        <button
          className="detailButton"
          onClick={() => {
            selectPoachVolleyCourse(CROSS);
          }}
          style={{ backgroundColor: poachVolleyCourse === CROSS ? '#ffff00' : '' }}
        >
          クロス
        </button>
        <button
          className="detailButton"
          onClick={() => {
            selectPoachVolleyCourse(REVERSE_CROSS);
          }}
          style={{ backgroundColor: poachVolleyCourse === REVERSE_CROSS ? '#ffff00' : '' }}
        >
          逆クロス
        </button>
      </div>
      <div>
        <button
          className="detailButton"
          onClick={() => {
            selectPoachVolleyCourse(LEFT_STRATE);
          }}
          style={{ backgroundColor: poachVolleyCourse === LEFT_STRATE ? '#ffff00' : '' }}
        >
          左ストレート
        </button>
        <button
          className="detailButton"
          onClick={() => {
            selectPoachVolleyCourse(RIGHT_STRATE);
          }}
          style={{ backgroundColor: poachVolleyCourse === RIGHT_STRATE ? '#ffff00' : '' }}
        >
          右ストレート
        </button>
      </div>

      <div>
        <button
          className="buckButton"
          onClick={() => {
            backToShotType();
          }}
        >
          戻る
        </button>
      </div>
    </div>
  );
};

export default PoachCourse;
