import { useRecoilValue } from 'recoil';
import { gamePlayerListState, serveListState, singlesDetailDataState } from '../store';

export const useInsertMatchData = () => {
  const gamePlayer = useRecoilValue(gamePlayerListState);
  const player1ServeData = useRecoilValue(serveListState('player1'));
  const player2ServeData = useRecoilValue(serveListState('player2'));
  const singlesDetailData = useRecoilValue(singlesDetailDataState);

  const insertMatchData = () => {
    const gamePlayer1 = gamePlayer[0].name;
    const gamePlayer2 = gamePlayer[1].name;
    const matchTitle = `${gamePlayer1} vs ${gamePlayer2}`;

    const serveData1 = player1ServeData.map((serveData) => ({ playerId: gamePlayer[0].id, isFirst: serveData }));
    const serveData2 = player2ServeData.map((serveData) => ({ playerId: gamePlayer[1].id, isFirst: serveData }));
    const serveData = serveData1.concat(...serveData2);

    const gameNumber = [];
    const gameLength = singlesDetailData.length;
    for (let i = 1; i <= gameLength; i++) {
      gameNumber.push(i);
    }

    const pointOrMissData = [];
    const pointData1 = [];
    const missData1 = [];
    const pointData2 = [];
    const missData2 = [];

    for (let i = 0; i < gameLength; i++) {
      pointData1.push(...singlesDetailData[i].player1.point);
      missData1.push(...singlesDetailData[i].player1.miss);
      pointData2.push(...singlesDetailData[i].player2.point);
      missData2.push(...singlesDetailData[i].player2.miss);
    }

    const payer1PointData = pointData1.map((point) => ({
      ...point,
      player_id: gamePlayer[0].id,
      isPoint: true,
    }));
    const player1MissData = missData1.map((miss) => ({
      ...miss,
      player_id: gamePlayer[0].id,
      isPoint: false,
    }));
    const player2PointData = pointData2.map((point) => ({
      ...point,
      player_id: gamePlayer[1].id,
      isPoint: true,
    }));
    const player2MissData = missData2.map((miss) => ({
      ...miss,
      player_id: gamePlayer[1].id,
      isPoint: false,
    }));

    pointOrMissData.push(...payer1PointData, ...player1MissData, ...player2PointData, ...player2MissData);

    const body = [{ matchTitle }, { serveData }, { gameNumber }, { pointOrMissData }];

    // console.log(JSON.stringify(allServeDataList));
    fetch('http://localhost:5001/match/register', { method: 'POST', body: JSON.stringify(body) });
  };

  return { insertMatchData };
};
