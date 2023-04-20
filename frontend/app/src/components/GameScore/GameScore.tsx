import './GameScore.css';

import React from 'react';

import { useSettingNewGame } from '../../hooks/useSettingNewGame';
// import { useValidatePages } from '../../hooks/useValidatePage';
import Doubles from './Doubles/Doubles';
import NavigateArea from './NavigateArea/NavigateArea';
import Singles from './Singles/Singles';

const GameScore = () => {
  // const { useValidateGameScore } = useValidatePages();
  const { gameType } = useSettingNewGame();
  // useValidateGameScore();

  return (
    <div className="gameScoreArea">
      <NavigateArea />
      {gameType === 'シングルス' ? <Singles /> : <Doubles />}
    </div>
  );
};

export default GameScore;
