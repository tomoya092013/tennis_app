import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { gameMatchState, gameTypeState, tieBreakState } from './store';

export const SINGLES = 'シングルス';
export const DOUBLES = 'ダブルス';
export const FIVE_GAMES = 5;
export const SEVEN_GAMES = 7;
export const NINE_GAMES = 9;
export const WITH_TIEBREAK = 'あり';
export const WITHOUT_TIEBREAK = 'なし';

export const useSettingNewGame = () => {
  const [gameType, setGameType] = useRecoilState(gameTypeState);
  const [gameMatch, setGameMatch] = useRecoilState(gameMatchState);
  const [tieBreak, setTieBreak] = useRecoilState(tieBreakState);

  const enabledNextButton: boolean = gameType !== null && gameMatch !== null && tieBreak !== null;
  const navigate = useNavigate();

  const enabledSettingNewGame = () => {
    navigate('/createPlayer');
  };

  const selectSingles = () => {
    setGameType(SINGLES);
  };
  const selectDoubles = () => {
    setGameType(DOUBLES);
  };
  const selectFiveGames = () => {
    setGameMatch(FIVE_GAMES);
  };
  const selectSevenGames = () => {
    setGameMatch(SEVEN_GAMES);
  };
  const selectNineGames = () => {
    setGameMatch(NINE_GAMES);
  };
  const selectWithTieBreak = () => {
    setTieBreak(WITH_TIEBREAK);
  };
  const selectWithoutTieBreak = () => {
    setTieBreak(WITHOUT_TIEBREAK);
  };

  return {
    gameType,
    gameMatch,
    tieBreak,
    enabledNextButton,
    selectSingles,
    selectDoubles,
    selectFiveGames,
    selectSevenGames,
    selectNineGames,
    selectWithTieBreak,
    selectWithoutTieBreak,
    enabledSettingNewGame,
  };
};
