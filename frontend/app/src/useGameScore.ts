import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { singlesPointCountState, singlesGameCountState } from './store';
import { TeamGame } from './type';

export const useGameScore = () => {
  const singlesPointCount = useRecoilValue(singlesPointCountState);
  const [singlseGameCount, setSinglseGameCount] = useRecoilState(singlesGameCountState);
  const team1Point = singlesPointCount.team1Point;
  const team2Point = singlesPointCount.team2Point;
  const newSinglesPointCount = { ...singlesPointCount };

  const calculateGameCount = (winTeam: TeamGame) => {
    let newSinglesGameCount = { ...singlseGameCount };
    const newTeamGame = [...newSinglesGameCount[winTeam]];
    newTeamGame.push(newSinglesPointCount);
    newSinglesGameCount = { ...newSinglesGameCount, [winTeam]: newTeamGame };
    setSinglseGameCount(newSinglesGameCount);
  };

  const useAddGameCount = () => {
    useEffect(() => {
      if (team1Point > team2Point) {
        if (team1Point >= 3 && team2Point >= 3) {
          if (team1Point - team2Point === 2) {
            calculateGameCount('team1Game');
          }
        } else {
          if (team1Point === 4) {
            calculateGameCount('team1Game');
          }
        }
      } else {
        if (team1Point >= 3 && team2Point >= 3) {
          if (team2Point - team1Point === 2) {
            calculateGameCount('team2Game');
          }
        } else {
          if (team2Point === 4) {
            calculateGameCount('team2Game');
          }
        }
      }
    }, []);
  };

  return { singlesPointCount, singlseGameCount, useAddGameCount };
};
