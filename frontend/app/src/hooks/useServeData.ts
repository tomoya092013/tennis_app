import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  courseState,
  foreOrBackState,
  gameNoState,
  missResultState,
  orderBallState,
  poachVolleyCourseState,
  rallyCountState,
  serveListSelector,
  serveListState,
  serveState,
  singlesDetailDataState,
} from '../store';
import { PlayerNo, PointOrMissDetail, Serve } from '../type';
import { useNavigate } from 'react-router-dom';
import { useGameScore } from './useGameScore';
import { useResetModalState } from './useResetModalState';

export type DoubleFaultOrServiceAce = 'Sa' | 'Df';

export const useServeData = (playerNo: PlayerNo | null) => {
  const [orderBall, setOrderOfBall] = useRecoilState(orderBallState);
  const foreOrBack = useRecoilValue(foreOrBackState);
  const course = useRecoilValue(courseState);
  const poachVolleyCourse = useRecoilValue(poachVolleyCourseState);
  const missResult = useRecoilValue(missResultState);
  const rallyCount = useRecoilValue(rallyCountState);

  const setServe = useSetRecoilState(serveState);
  const [singlesAllOneGameScore, setSinglesAllOneGameScore] = useRecoilState(singlesDetailDataState);
  const { currenSinglesGameOrder } = useGameScore();
  const { resetModalState } = useResetModalState();
  const navigate = useNavigate();
  const [isFirstServe, setIsFirstServe] = useRecoilState(serveListState(playerNo));
  const probability = useRecoilValue(serveListSelector(playerNo));
  const gameNo = useRecoilValue(gameNoState);

  const selectServe = (serve: Serve) => {
    setServe(serve);
    addSereveData(serve);
    navigate('/modal/serveResult');
  };

  const addSereveData = (serve: Serve | null) => {
    if (!serve) return;
    if (playerNo === null) return;
    const isFirst = serve === 'ファーストサーブ' ? true : false;
    setIsFirstServe([...isFirstServe, isFirst]);
  };

  const addDoubleFaultOrServiceAce = (serve: Serve | null, shotType: DoubleFaultOrServiceAce) => {
    if (playerNo === null) return;
    const newPointOrMiss: PointOrMissDetail = {
      gameNo,
      order: orderBall,
      serve,
      shotType,
      foreOrBack,
      course,
      poachVolleyCourse,
      missResult,
      rallyCount,
    };
    shotType === 'Df' && addSereveData(serve);
    const newAllSinglesOneGameScore = [...singlesAllOneGameScore];
    let newSinglesOneGameScore = { ...newAllSinglesOneGameScore[currenSinglesGameOrder] };
    let newPlayer = { ...newSinglesOneGameScore[playerNo] };
    const newArray = shotType === 'Sa' ? [...newPlayer.point] : [...newPlayer.miss];
    newArray.push(newPointOrMiss);
    newPlayer = shotType === 'Sa' ? { ...newPlayer, point: newArray } : { ...newPlayer, miss: newArray };
    newSinglesOneGameScore = { ...newSinglesOneGameScore, [playerNo]: newPlayer };
    newAllSinglesOneGameScore[currenSinglesGameOrder] = newSinglesOneGameScore;
    setSinglesAllOneGameScore(newAllSinglesOneGameScore);
    setOrderOfBall(orderBall + 1);
    resetModalState();
    navigate('/gameScore');
  };

  return {
    selectServe,
    probability,
    addDoubleFaultOrServiceAce,
  };
};
