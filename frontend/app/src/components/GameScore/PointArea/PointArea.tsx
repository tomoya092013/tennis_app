import React from 'react';
import { POINT, useModalPointDetail } from '../../../useModalPointDetail';

const PointArea = () => {
  const { serve, selectPointOrMiss } = useModalPointDetail();
  return (
    <button
      className="pointButton"
      onClick={() => selectPointOrMiss(POINT)}
      style={{ backgroundColor: serve === null ? '' : '#fcbcdb' }}
      disabled={serve === null}
    >
      ポイント
    </button>
  );
};

export default PointArea;
