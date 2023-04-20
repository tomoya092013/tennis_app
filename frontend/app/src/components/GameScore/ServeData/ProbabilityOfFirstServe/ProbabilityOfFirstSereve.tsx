import React from 'react';
import { PlayerNo } from '../../../../type';
import { useServeData } from '../../../../hooks/useServeData';

type Props = {
  playerNo: PlayerNo;
};

export const ProbabilityOfFirstSereve = ({ playerNo }: Props) => {
  const { probability } = useServeData(playerNo);

  return (
    <div className="playerServeData">
      <div className="probabilityOfFirstServe">{probability > 0 ? probability : 0}%</div>
      ファーストサーブ
    </div>
  );
};
