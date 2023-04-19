import React from 'react';
import { ProbabilityOfFirstSereve } from './ProbabilityOfFirstServe';

const ServeDAta = () => {
  return (
    <div className="serveDataArea">
      <ProbabilityOfFirstSereve playerNo={'player1'} />
      <ProbabilityOfFirstSereve playerNo={'player2'} />
    </div>
  );
};

export default ServeDAta;
