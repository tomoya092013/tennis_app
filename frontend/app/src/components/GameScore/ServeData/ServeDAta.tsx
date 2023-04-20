import React from 'react';
import { ProbabilityOfFirstSereve } from './ProbabilityOfFirstServe';

const ServeData = () => {
  return (
    <div className="serveDataArea">
      <ProbabilityOfFirstSereve playerNo={'player1'} />
      <ProbabilityOfFirstSereve playerNo={'player2'} />
    </div>
  );
};

export default ServeData;
