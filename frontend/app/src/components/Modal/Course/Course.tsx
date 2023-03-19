import React from 'react';
import { CROSS, REVERSE_CROSS, STRATE, MIDDLE, useModalPointDetail } from '../../../useModalPointDetail';

const Course = () => {
  const { course, selectCourse, backToShotType } = useModalPointDetail();
  return (
    <div className="detailArea">
      <h2>打ったコースを選択</h2>

      <div className="courseButton">
        <button
          className="detailButton"
          onClick={() => {
            selectCourse(CROSS);
          }}
          style={{ backgroundColor: course === CROSS ? '#ffff00' : '' }}
        >
          クロス
        </button>
        <button
          className="detailButton"
          onClick={() => {
            selectCourse(REVERSE_CROSS);
          }}
          style={{ backgroundColor: course === REVERSE_CROSS ? '#ffff00' : '' }}
        >
          逆クロス
        </button>
      </div>
      <div className="courseButton">
        <button
          className="detailButton"
          onClick={() => {
            selectCourse(STRATE);
          }}
          style={{ backgroundColor: course === STRATE ? '#ffff00' : '' }}
        >
          ストレート
        </button>
        <button
          className="detailButton"
          onClick={() => {
            selectCourse(MIDDLE);
          }}
          style={{ backgroundColor: course === MIDDLE ? '#ffff00' : '' }}
        >
          ミドル
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

export default Course;
