import React from 'react';

import {
    DOUBLE_FAULT, FIRST_SERVE, RECEIVE, useModalPointDetail
} from '../../../hooks/useModalPointDetail';
import { usePointOrMissStringBuilder } from '../../../hooks/usePointOrMissStringBuilder';
import { PlayerNo, PointOrMiss } from '../../../type';

type Props = {
  playerNo: PlayerNo;
  pointOrMiss: PointOrMiss;
  gameOrder: number;
};

const PointOrMissArea = ({ playerNo, pointOrMiss, gameOrder }: Props) => {
  const { singlesAllOneGameScore } = useModalPointDetail();
  const { pointOrMissStringBuilder } = usePointOrMissStringBuilder();
  return (
    <div className="detailPointorMiss">
      {singlesAllOneGameScore[gameOrder][playerNo][pointOrMiss].length > 0 &&
        singlesAllOneGameScore[gameOrder][playerNo][pointOrMiss].map((pointMiss) => (
          <div key={pointMiss.order} className="detailPoitOrMissData">
            <div className={pointMiss.serve === FIRST_SERVE ? 'startFirstServe' : 'startSecondServe'}>
              {pointMiss.order}
            </div>
            <div
              className={
                (pointMiss.shotType === RECEIVE && pointOrMiss === 'miss') || pointMiss.shotType === DOUBLE_FAULT
                  ? 'resultWithReceive'
                  : 'resultWithoutReceive'
              }
            >
              {pointOrMissStringBuilder(pointMiss)}
            </div>
          </div>
        ))}
    </div>
  );
};

export default PointOrMissArea;
