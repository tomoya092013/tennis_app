import React from 'react';
import { PlayerNo, PointOrMiss } from '../../../type';
import { FIRST_SERVE, RECEIVE, DOUBLE_FAULT, useModalPointDetail } from '../../../useModalPointDetail';
import { usePointOrMissStringBuilder } from '../../../usePointOrMissStringBuilder';

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
