import React from 'react';
import { PlayerNo, PointOrMiss } from '../../../type';
import { FIRST_SERVE, RECEIVE, useModalPointDetail } from '../../../useModalPointDetail';
import { usePointOrMissStringBuilder } from '../../../usePointOrMissStringBuilder';

type Props = {
  playerNo: PlayerNo;
  pointOrMiss: PointOrMiss;
};

const PointOrMissArea = ({ playerNo, pointOrMiss }: Props) => {
  const { singlesGameScore } = useModalPointDetail();
  const { pointOrMissStringBuilder } = usePointOrMissStringBuilder();
  return (
    <div className="detailPointorMiss">
      {singlesGameScore[playerNo][pointOrMiss].length > 0 &&
        singlesGameScore[playerNo][pointOrMiss].map((pointMiss) => (
          <div key={pointMiss.order} className="detailPoitOrMissData">
            <div className={pointMiss.serveType === FIRST_SERVE ? 'startFirstServe' : 'startSecondServe'}>
              {pointMiss.order}
            </div>
            <div className={pointMiss.shotType === RECEIVE ? 'resultWithReceive' : 'resultWithoutReceive'}>
              {pointOrMissStringBuilder(pointMiss)}
            </div>
          </div>
        ))}
    </div>
  );
};

export default PointOrMissArea;
