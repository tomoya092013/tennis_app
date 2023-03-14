import { useRecoilState } from 'recoil';
import { PlayerListState } from './store';

export const useCreatePlayer = () => {
  const [singlsePlayerList, setSinglsePlayerList] = useRecoilState(PlayerListState);

  const createSinglesPlayer = (player1: string, player2: string) => {
    setSinglsePlayerList([
      {
        name: player1,
      },
      {
        name: player2,
      },
    ]);
  };

  const createDoublesPlayer = (player1: string, player2: string, player3: string, player4: string) => {
    setSinglsePlayerList([
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
    singlsePlayerList,
    createSinglesPlayer,
    createDoublesPlayer,
    enabledSinglesNextButton,
    enabledDoublesNextButton,
  };
};
