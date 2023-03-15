import React from 'react';
import { useRecoilValue } from 'recoil';
import { enableAddShotState } from '../../../store';

const PointArea = () => {
  const enableAddShot = useRecoilValue(enableAddShotState);
  return (
    <button className="pointArea" style={{ backgroundColor: enableAddShot ? '#fcbcdb' : '' }} disabled={!enableAddShot}>
      ポイント
    </button>
  );
};

export default PointArea;
