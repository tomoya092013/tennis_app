import React from 'react';
import { useValidatePages } from '../../useValidatePage';
import { useSettingNewGame } from '../../useSettingNewGame';
import Doubles from './Doubles/Doubles';
import Singles from './Singles/Singles';
import NavigateArea from './NavigateArea/NavigateArea';
import './GameScore.css';

const GameScore = () => {
  const { useValidateGameScore } = useValidatePages();
  const { gameType } = useSettingNewGame();
  useValidateGameScore();

  return (
    <div className="gameScoreArea">
      <NavigateArea />
      {gameType === 'シングルス' ? <Singles /> : <Doubles />}
    </div>
  );
};

export default GameScore;
