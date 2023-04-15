import React from 'react';
import { useRecoilValue } from 'recoil';
import { singlsePlayerServeDataState } from '../../../store';

const ServeDAta = () => {
  const singlsePlayerServeData = useRecoilValue(singlsePlayerServeDataState);
  console.log(singlsePlayerServeData);
  return (
    <div className="serveDataArea">
      <div className="playerServeData">
        <div className="probabilityOfFirstServe">
          {singlsePlayerServeData.probabilityOfPlayer1FirstServe > 0
            ? singlsePlayerServeData.probabilityOfPlayer1FirstServe
            : 0}
          %
        </div>
        ファーストサーブ
      </div>
      <div className="playerServeData">
        <div className="probabilityOfFirstServe">
          {singlsePlayerServeData.probabilityOfPlayer2FirstServe > 0
            ? singlsePlayerServeData.probabilityOfPlayer2FirstServe
            : 0}
          %
        </div>
        ファーストサーブ
      </div>
    </div>
  );
};

export default ServeDAta;
