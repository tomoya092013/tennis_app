import React from 'react';
import { useModalPointDetail } from '../../../../useModalPointDetail';

const DisplayDetailSinglesScore = () => {
  const { singlesGameScore } = useModalPointDetail();
  console.log(singlesGameScore.player1.miss);
  return (
    <div
      className="displayDetailSingles
    ScoreArea"
    >
      <div className="displayDetailPoint">
        <div className="detailPoint">
          <div>プレイヤー1_ポイント</div>
          {singlesGameScore.player1.point.length > 0 &&
            singlesGameScore.player1.point.map((point) => (
              <div key={point.order}>
                {point.order}
                {point.result}
                {/* ここでPointOrMissの変換関数を呼び出す */}
              </div>
            ))}
        </div>
        <div className="detailMiss">
          <div>プレイヤー1_ミス</div>
          {singlesGameScore.player1.miss.length > 0 &&
            singlesGameScore.player1.miss.map((miss) => (
              <div key={miss.order}>
                {miss.order}
                {miss.result}
              </div>
            ))}
        </div>
      </div>
      <div className="pointScore">1 - 1</div>
      <div className="displayDetailPoint">
        <div className="detailPoint">
          <div>プレイヤー2_ポイント</div>
          {singlesGameScore.player2.point.length > 0 &&
            singlesGameScore.player2.point.map((point) => (
              <div key={point.order}>
                {point.order}
                {point.result}
              </div>
            ))}
        </div>
        <div className="detailMiss">
          <div>プレイヤー2_ミス</div>
          {singlesGameScore.player2.miss.length > 0 &&
            singlesGameScore.player2.miss.map((miss) => (
              <div key={miss.order}>
                {miss.order}
                {miss.result}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayDetailSinglesScore;
