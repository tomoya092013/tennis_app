import React from 'react';
import { useGameScore } from '../../../useGameScore';
import { useModalPointDetail } from '../../../useModalPointDetail';

const NavigateArea = () => {
  const { serve } = useModalPointDetail();
  const { singlesGameCount } = useGameScore();

  return (
    <>
      {serve === null && <div className="navigateArea">サービスプレーヤーを選択</div>}
      {serve !== null && singlesGameCount.winner === null ? (
        <div className="navigateArea">誰のポイント？ミス？</div>
      ) : null}
    </>
  );
};

export default NavigateArea;
