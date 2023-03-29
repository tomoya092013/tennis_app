import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  allSinglesGamePointState,
  singlesGameCountState,
  defaultSinglesDetailDataState,
  defaultOrderBallState,
  singlesDetailDataState,
  orderBallState,
  gameMatchState,
  tieBreakState,
  serveState,
} from './store';
import { Team } from './type';

type TeamWinOrLose = {
  team: Team;
  point: number;
};

export const useGameScore = () => {
  const singlesGamePoint = useRecoilValue(allSinglesGamePointState);
  const gameMatch = useRecoilValue(gameMatchState);
  const tieBreak = useRecoilValue(tieBreakState);
  const [singlesGameCount, setSinglseGameCount] = useRecoilState(singlesGameCountState);
  const [singlesAllOneGameScore, setSinglesAllOneGameScore] = useRecoilState(singlesDetailDataState);
  const setOrderBall = useSetRecoilState(orderBallState);
  const setServe = useSetRecoilState(serveState);
  const currenSinglesGameOrder = singlesGamePoint.length - 1;
  const team1Point = singlesGamePoint[currenSinglesGameOrder].team1Point;
  const team2Point = singlesGamePoint[currenSinglesGameOrder].team2Point;
  const team1GameCount = singlesGameCount.team1.length;
  const team2GameCount = singlesGameCount.team2.length;
  const newSinglesGamePoint = { ...singlesGamePoint[currenSinglesGameOrder] };
  const finalGame = gameMatch && Math.floor(gameMatch / 2);

  const judgeCloseGame = (winTeam: Team): boolean => {
    return singlesGameCount[winTeam].length === finalGame;
  };

  const calculateGameCount = (winTeam: Team) => {
    let newSinglesGameCount = { ...singlesGameCount };
    const newGamePoint = [...newSinglesGameCount[winTeam]];
    newGamePoint.push(newSinglesGamePoint);
    const newEveryGameWinner = [...newSinglesGameCount.everyGameWinner];
    newEveryGameWinner.push(winTeam);
    newSinglesGameCount = judgeCloseGame(winTeam)
      ? { ...newSinglesGameCount, [winTeam]: newGamePoint, everyGameWinner: newEveryGameWinner, winner: winTeam }
      : { ...newSinglesGameCount, [winTeam]: newGamePoint, everyGameWinner: newEveryGameWinner };
    judgeCloseGame(winTeam) && setServe('Close');
    setSinglseGameCount(newSinglesGameCount);
  };

  const setNextGame = () => {
    const nextNewGame = defaultSinglesDetailDataState;
    const newSinglesAllOneGameScore = [...singlesAllOneGameScore, nextNewGame];
    setSinglesAllOneGameScore(newSinglesAllOneGameScore);
    setOrderBall(defaultOrderBallState);
  };

  const judgeFinalGameCount = (winTeam: TeamWinOrLose, looseTeam: TeamWinOrLose) => {
    if (winTeam.point === 7 && looseTeam.point < 6) {
      calculateGameCount(winTeam.team);
      return;
    }
    if (winTeam.point >= 6 && looseTeam.point >= 6 && winTeam.point - looseTeam.point === 2) {
      calculateGameCount(winTeam.team);
    }
  };

  const judgeGameCount = (winTeam: TeamWinOrLose, looseTeam: TeamWinOrLose) => {
    if (winTeam.point === 4 && looseTeam.point < 3) {
      calculateGameCount(winTeam.team);
      !judgeCloseGame(winTeam.team) && setNextGame();
      return;
    }
    if (winTeam.point >= 3 && looseTeam.point >= 3 && winTeam.point - looseTeam.point === 2) {
      calculateGameCount(winTeam.team);
      !judgeCloseGame(winTeam.team) && setNextGame();
    }
  };

  const useAddGameCount = () => {
    useEffect(() => {
      if (team1Point === team2Point || singlesGameCount.winner !== null) return;

      const winTeam: TeamWinOrLose =
        team1Point > team2Point ? { team: 'team1', point: team1Point } : { team: 'team2', point: team2Point };

      const looseTeam: TeamWinOrLose =
        winTeam.team === 'team1' ? { team: 'team2', point: team2Point } : { team: 'team1', point: team1Point };

      if (tieBreak === 'あり' && team1GameCount === finalGame && team2GameCount === finalGame) {
        judgeFinalGameCount(winTeam, looseTeam);
      } else {
        judgeGameCount(winTeam, looseTeam);
      }
    }, []);
  };

  return {
    team1GameCount,
    team2GameCount,
    singlesGameCount,
    singlesGamePoint,
    currenSinglesGameOrder,
    useAddGameCount,
  };
};
