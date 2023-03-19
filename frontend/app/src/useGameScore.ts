import { useRecoilState, useRecoilValue } from 'recoil';
import {
  singlesGameScoreState,
  player1_MissListState,
  player1_PointListState,
  player2_MissListState,
  player2_PointListState,
  playerListState,
} from './store';
// import { GameScore } from '../type';

export const useGameScore = () => {
  const playerList = useRecoilValue(playerListState);
  const [gameScore, setGameScore] = useRecoilState(singlesGameScoreState);
  const player1_PointList = useRecoilValue(player1_PointListState);
  const player1_MissList = useRecoilValue(player1_MissListState);
  const player2_PointList = useRecoilValue(player2_PointListState);
  const player2_MissList = useRecoilValue(player2_MissListState);

  // const createGameScore =():GameScore => {
  // setGameScore(
  //   player_1:{
  //     player:playerList[0],
  //     point:player1_PointList,
  //     miss:player1_MissList,
  //   },
  //   player_2:{
  //     player: playerList[1],
  //     point:player2_PointList,
  //     miss:player2_MissList,
  //   },
  // )}

  return {};
};
