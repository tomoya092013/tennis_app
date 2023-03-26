import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SinglesGamePointState, singlesGameCountState } from './store';
import { TeamGame } from './type';

type TeamWinOrLose = {
  teamGame: TeamGame;
  point: number;
};

export const useGameScore = () => {
  const SinglesGamePoint = useRecoilValue(SinglesGamePointState);
  const [singlseGameCount, setSinglseGameCount] = useRecoilState(singlesGameCountState);
  const team1Point = SinglesGamePoint.team1Point;
  const team2Point = SinglesGamePoint.team2Point;
  const newSinglesGamePoint = { ...SinglesGamePoint };

  const calculateGameCount = (winTeam: TeamGame) => {
    let newSinglesGameCount = { ...singlseGameCount };
    const newTeamGame = [...newSinglesGameCount[winTeam]];
    newTeamGame.push(newSinglesGamePoint);
    newSinglesGameCount = { ...newSinglesGameCount, [winTeam]: newTeamGame };
    setSinglseGameCount(newSinglesGameCount);
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
        return;
      }

      if (winTeam.point >= 3 && looseTeam.point >= 3 && winTeam.point - looseTeam.point === 2) {
        calculateGameCount(winTeam.teamGame);
      }
    }, []);
  };

  return { SinglesGamePoint, singlseGameCount, useAddGameCount };
};
