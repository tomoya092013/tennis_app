import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { PlayerListState } from './store';

export const useCreatePlayer = () => {
  const navigate = useNavigate();

  const [playerList, setPlayerList] = useRecoilState(PlayerListState);

  const createSinglesPlayer = (player1: string, player2: string) => {
    setPlayerList([
      {
        name: player1,
      },
      {
        name: player2,
      },
    ]);
    navigate('.././GameScore');
  };

  const createDoublesPlayer = (player1: string, player2: string, player3: string, player4: string) => {
    setPlayerList([
      {
        name: player1,
      },
      {
        name: player2,
      },
      {
        name: player3,
      },
      {
        name: player4,
      },
    ]);
  };

  const enabledSinglesNextButton = (player1: string, player2: string): boolean => player1 !== '' && player2 !== '';

  const enabledDoublesNextButton = (player1: string, player2: string, player3: string, player4: string): boolean =>
    player1 !== '' && player2 !== '' && player3 !== '' && player4 !== '';

  return {
    playerList,
    createSinglesPlayer,
    createDoublesPlayer,
    enabledSinglesNextButton,
    enabledDoublesNextButton,
  };
};
