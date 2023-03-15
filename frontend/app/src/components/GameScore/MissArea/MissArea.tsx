import React from 'react';
import { useRecoilValue } from 'recoil';
import { enableAddShotState } from '../../../store';

const MissArea = () => {
  const enableAddShot = useRecoilValue(enableAddShotState);
  return (
    <button className="missArea" style={{ backgroundColor: enableAddShot ? '#fcbcdb' : '' }} disabled={!enableAddShot}>
      ミス
    </button>
  );
};

export default MissArea;
