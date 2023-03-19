import React from 'react';
import { MISS, useModalPointDetail } from '../../../useModalPointDetail';

const MissArea = () => {
  const { serve, selectPointOrMiss } = useModalPointDetail();
  return (
    <button
      className="missButton"
      onClick={() => selectPointOrMiss(MISS)}
      style={{ backgroundColor: serve === null ? '' : '#bce9fc' }}
      disabled={serve === null}
    >
      ミス
    </button>
  );
};

export default MissArea;
