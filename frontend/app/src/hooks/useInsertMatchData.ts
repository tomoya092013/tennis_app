import { useRecoilValue } from 'recoil';
import { gamePlayerListState, serveListState } from '../store';

export const useInsertMatchData = () => {
  const gamePlayer = useRecoilValue(gamePlayerListState);
  const player1ServeData = useRecoilValue(serveListState('player1'));
  const player2ServeData = useRecoilValue(serveListState('player2'));

  const insertMatchData = () => {
    const serveData1 = player1ServeData.map((serveData) => ({ playerId: gamePlayer[0].id, isFirst: serveData }));
    const serveData2 = player2ServeData.map((serveData) => ({ playerId: gamePlayer[1].id, isFirst: serveData }));
    const allServeDataList = serveData1.concat(...serveData2);
    // console.log(JSON.stringify(allServeDataList));
    fetch('http://localhost:5001/match/register', { method: 'POST', body: JSON.stringify(allServeDataList) });
  };

  return { insertMatchData };
};
