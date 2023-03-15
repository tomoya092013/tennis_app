import React from 'react';
import { useRecoilValue } from 'recoil';
import { enableAddServeState, enableAddShotState } from '../../../store';

const NavigateArea = () => {
  const enableAddServe = useRecoilValue(enableAddServeState);
  const enableAddShot = useRecoilValue(enableAddShotState);
  return (
    <div className="navigateArea">
      {enableAddServe ? <div>サービスプレーヤーを選択</div> : enableAddShot ? <div>誰のポイント？ミス？</div> : ''}
    </div>
  );
};

export default NavigateArea;
