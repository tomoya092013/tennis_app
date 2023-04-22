import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { gamePlayerListState } from '../store';
import { Player } from '../type';

export const useSelectGamePlayer = () => {
  const navigate = useNavigate();
  const [gamePlayerList, setGamePlayerList] = useRecoilState(gamePlayerListState);

  const setSinglesGamePlayer = (gamePlayer1: Player, gamePlayer2: Player) => {
    setGamePlayerList([
      {
        id: gamePlayer1.id,
        name: gamePlayer1.name,
        playerNo: 'player1',
      },
      {
        id: gamePlayer2.id,
        name: gamePlayer2.name,
        playerNo: 'player2',
      },
    ]);
    navigate('/GameScore');
  };

  const enabledSinglesNextButton = (gamePlayer1: Player, gamePlayer2: Player): boolean =>
    gamePlayer1.name !== '' && gamePlayer2.name !== '';

  return {
    gamePlayerList,
    setSinglesGamePlayer,
    enabledSinglesNextButton,
  };
};
