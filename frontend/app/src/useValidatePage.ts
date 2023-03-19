import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { gameTypeState, playerListState } from './store';
import { Serve } from './type';
import { useSettingNewGame } from './useSettingNewGame';

export const useValidatePages = () => {
  const navigate = useNavigate();
  const gameType = useRecoilValue(gameTypeState);
  const playerList = useRecoilValue(playerListState);
  const { enabledNextButton } = useSettingNewGame();

  const useValidateCreatePlayer = () => {
    useEffect(() => {
      if (!enabledNextButton) navigate('/');
    }, []);
  };

  const useValidateGameScore = () => {
    useEffect(() => {
      if (gameType === 'シングルス') {
        playerList.length !== 2 && navigate('/createPlayer');
      } else if (gameType === 'ダブルス') {
        playerList.length !== 4 && navigate('/createPlayer');
      } else navigate('/createPlayer');
    }, []);
  };

  const useValidateSelectServe = (serve: Serve | null) => {
    useEffect(() => {
      if (serve === null) navigate('/gameScore');
    }, []);
  };
  return { useValidateCreatePlayer, useValidateGameScore, useValidateSelectServe };
};
