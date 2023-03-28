import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  allSinglesGamePointState,
  singlesGameCountState,
  defaultSinglseGameScoreState,
  defaultOrderBallState,
  singlesAllOneGameScoreState,
  orderBallState,
} from './store';
import { TeamGame } from './type';

type TeamWinOrLose = {
  teamGame: TeamGame;
  point: number;
};

export const useGameScore = () => {
  const singlesGamePoint = useRecoilValue(allSinglesGamePointState);
  const currenSinglesGameOrder = singlesGamePoint.length - 1;
  const [singlseGameCount, setSinglseGameCount] = useRecoilState(singlesGameCountState);
  const [singlesAllOneGameScore, setSinglesAllOneGameScore] = useRecoilState(singlesAllOneGameScoreState);
  const setOrderBall = useSetRecoilState(orderBallState);
  const team1Point = singlesGamePoint[currenSinglesGameOrder].team1Point;
  const team2Point = singlesGamePoint[currenSinglesGameOrder].team2Point;
  const newSinglesGamePoint = { ...singlesGamePoint[currenSinglesGameOrder] };

  const calculateGameCount = (winTeam: TeamGame) => {
    let newSinglesGameCount = { ...singlseGameCount };
    const newGamePoint = [...newSinglesGameCount[winTeam]];
    newGamePoint.push(newSinglesGamePoint);
    const newEveryGameWinner = [...newSinglesGameCount.everyGameWinner];
    newEveryGameWinner.push(winTeam);
    newSinglesGameCount = { ...newSinglesGameCount, [winTeam]: newGamePoint, everyGameWinner: newEveryGameWinner };
    setSinglseGameCount(newSinglesGameCount);
  };

  const setNextGame = () => {
    const nextNewGame = defaultSinglseGameScoreState;
    const newSinglesAllOneGameScore = [...singlesAllOneGameScore, nextNewGame];
    setSinglesAllOneGameScore(newSinglesAllOneGameScore);
    setOrderBall(defaultOrderBallState);
  };

  const useAddGameCount = () => {
    useEffect(() => {
      if (team1Point === team2Point) return;

      const winTeam: TeamWinOrLose =
        team1Point > team2Point
          ? { teamGame: 'team1Game', point: team1Point }
          : { teamGame: 'team2Game', point: team2Point };

      const looseTeam: TeamWinOrLose =
        winTeam.teamGame === 'team1Game'
          ? { teamGame: 'team2Game', point: team2Point }
          : { teamGame: 'team1Game', point: team1Point };

      // 最終ゲームは7ポイント制 タイブレーク 5ゲームだったら2-2の時しか発生しない

      if (winTeam.point === 4 && looseTeam.point < 3) {
        calculateGameCount(winTeam.teamGame);
        setNextGame();
        return;
      }

      if (winTeam.point >= 3 && looseTeam.point >= 3 && winTeam.point - looseTeam.point === 2) {
        calculateGameCount(winTeam.teamGame);
        setNextGame();
      }
    }, []);
  };

  return { singlseGameCount, singlesGamePoint, currenSinglesGameOrder, useAddGameCount };
};
