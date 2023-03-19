import React from 'react';
import { useModalPointDetail } from '../../../useModalPointDetail';

const NavigateArea = () => {
  const { serve } = useModalPointDetail();

  return (
    <div className="navigateArea">
      {serve === null ? <div>サービスプレーヤーを選択</div> : <div>誰のポイント？ミス？</div>}
    </div>
  );
};

export default NavigateArea;
