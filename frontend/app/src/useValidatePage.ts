import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { gameTypeState, playerListState } from './store';
import { PlayerNo, Serve } from './type';
import { useModalPointDetail } from './useModalPointDetail';
import { useSettingNewGame } from './useSettingNewGame';

export const useValidatePages = () => {
  const navigate = useNavigate();
  const gameType = useRecoilValue(gameTypeState);
  const playerList = useRecoilValue(playerListState);
  const { enabledNextButton } = useSettingNewGame();
  const { creaAllState } = useModalPointDetail();

  const useValidateCreatePlayer = () => {
    useEffect(() => {
      creaAllState();
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

  const useValidateSelectServe = (servicePlayer: PlayerNo | null) => {
    useEffect(() => {
      servicePlayer === null && navigate('/gameScore');
    }, []);
  };

  const useValidateServeResult = (serve: Serve | null) => {
    useEffect(() => {
      serve === null && navigate('/modal/serve');
      serve === 'Close' && navigate('/gameScore');
    }, []);
  };

  const useValidateForeOrBack = (pointOrMissButton: boolean) => {
    useEffect(() => {
      !pointOrMissButton && navigate('/gameScore');
    }, []);
  };

  return {
    useValidateCreatePlayer,
    useValidateGameScore,
    useValidateSelectServe,
    useValidateServeResult,
    useValidateForeOrBack,
  };
};
