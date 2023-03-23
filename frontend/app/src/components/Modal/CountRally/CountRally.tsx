import React from 'react';
import { useModalPointDetail } from '../../../useModalPointDetail';

const CountRally = () => {
  const { selectRallyCount, backToCourseOrMissResult } = useModalPointDetail();
  return (
    <div className="detailArea">
      <h2>ラリー数を選択</h2>
      <div>
        <button
          className="detailButton"
          onClick={() => {
            selectRallyCount(3);
          }}
        >
          3
        </button>
        <button
          className="detailButton"
          onClick={() => {
            selectRallyCount(4);
          }}
        >
          4
        </button>
      </div>
      <div>
        <button
          className="detailButton"
          onClick={() => {
            selectRallyCount(5);
          }}
        >
          5
        </button>
        <button
          className="detailButton"
          onClick={() => {
            selectRallyCount(6);
          }}
        >
          6
        </button>
      </div>
      <div>
        <button
          className="detailButton"
          onClick={() => {
            selectRallyCount(7);
          }}
        >
          7
        </button>
        <button
          className="detailButton"
          onClick={() => {
            selectRallyCount(8);
          }}
        >
          8
        </button>
      </div>
      <div>
        <button
          className="detailButton"
          onClick={() => {
            selectRallyCount(9);
          }}
        >
          9
        </button>
        <button
          className="detailButton"
          onClick={() => {
            selectRallyCount(10);
          }}
        >
          10以上
        </button>
      </div>

      <div>
        <button className="buckButton" onClick={() => backToCourseOrMissResult()}>
          戻る
        </button>
      </div>
    </div>
  );
};

export default CountRally;
