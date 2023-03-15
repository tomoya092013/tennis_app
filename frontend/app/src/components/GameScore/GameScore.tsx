import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreatePlayer } from '../../useCreatePlayer';
import { useSettingNewGame } from '../../useSettingNewGame';
import Doubles from './Doubles/Doubles';
import Singles from './Singles/Singles';

const GameScore = () => {
  const { enabledNextButton } = useSettingNewGame();
  const { enabledSinglesNextButton, enabledDoublesNextButton } = useCreatePlayer();
  const navigate = useNavigate();
  useEffect(() => {
    if (!enabledNextButton || !enabledSinglesNextButton || !enabledDoublesNextButton) navigate('../');
  }, []);

  const { gameType } = useSettingNewGame();

  return <>{gameType === 'シングルス' ? <Singles /> : <Doubles />}</>;
};

export default GameScore;
