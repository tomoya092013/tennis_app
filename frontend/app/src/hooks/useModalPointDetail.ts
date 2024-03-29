import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import {
  courseState,
  foreOrBackState,
  gameNoState,
  missResultState,
  orderBallState,
  poachVolleyCourseState,
  pointOrMissButtonState,
  pointOrMissPlayerState,
  pointOrMissState,
  rallyCountState,
  rallyState,
  serveDataState,
  serveState,
  servicePlayerState,
  shotTypeState,
  singlesDetailDataState,
} from '../store';
import {
  Course,
  ForeOrBack,
  MissResult,
  PlayerNo,
  PoachVolleyCourse,
  PointOrMiss,
  PointOrMissDetail,
  RallyCount,
  ShotType,
} from '../type';
import { useGameScore } from './useGameScore';
import { useResetModalState } from './useResetModalState';

export const FIRST_SERVE = 'ファーストサーブ';
export const SECOND_SERVE = 'セカンドサーブ';
export const FORE_HAND = 'F';
export const BACK_HAND = 'B';
export const POINT = 'point';
export const MISS = 'miss';
export const RECEIVE = 'R';
export const STROKE = 'ST';
export const VOLLEY = 'V';
export const POACH_VOLLEY = 'Pv';
export const SMASH = 'Sm';
export const Etc = 'Etc';
export const CROSS = 'Cr';
export const REVERSE_CROSS = 'Cr!';
export const STRATE = 'St';
export const MIDDLE = 'Md';
export const LEFT_STRATE = '左St';
export const RIGHT_STRATE = '右St';
export const NET = 'N';
export const BACK_OUT = 'Bo';
export const SIDE_OUT = 'So';

export const useModalPointDetail = () => {
  const [orderBall, setOrderOfBall] = useRecoilState(orderBallState);
  const [pointOrMiss, setPointOrMiss] = useRecoilState(pointOrMissState);
  const [pointOrMissButton, setPointOrMissButton] = useRecoilState(pointOrMissButtonState);
  const [serve, setServe] = useRecoilState(serveState);
  const [rally, setRally] = useRecoilState(rallyState);
  const [foreOrBack, setForeOrBack] = useRecoilState(foreOrBackState);
  const [shotType, setShotType] = useRecoilState(shotTypeState);
  const [course, setCourse] = useRecoilState(courseState);
  const [poachVolleyCourse, setPoachVolleyCourse] = useRecoilState(poachVolleyCourseState);
  const [missResult, setMissResult] = useRecoilState(missResultState);
  // eslint-disable-next-line no-unused-vars
  const setRallyCount = useSetRecoilState(rallyCountState);
  const [servicePlayer, setServicePlayer] = useRecoilState(servicePlayerState);
  const [pointOrMissPlayer, setPointOrMissPlayer] = useRecoilState(pointOrMissPlayerState);
  const [singlesAllOneGameScore, setSinglesAllOneGameScore] = useRecoilState(singlesDetailDataState);
  const [serveData, setServeData] = useRecoilState(serveDataState);
  const gameNo = useRecoilValue(gameNoState);

  const navigate = useNavigate();
  const { currenSinglesGameOrder } = useGameScore();
  const { resetModalState } = useResetModalState();

  const selectServicePlayer = (playerNo: PlayerNo) => {
    setServicePlayer(playerNo);
    navigate('/modal/serve');
  };

  const addDetailPointMiss = (newPointOrMiss: PointOrMissDetail) => {
    if (pointOrMissPlayer === null) return;
    if (pointOrMiss === null) return;
    if (shotType === null) return;
    const newAllSinglesOneGameScore = [...singlesAllOneGameScore];
    let newSinglesOneGameScore = { ...newAllSinglesOneGameScore[currenSinglesGameOrder] };
    let newPlayer = { ...newSinglesOneGameScore[pointOrMissPlayer] };
    const newPointMiss = [...newPlayer[pointOrMiss]];
    newPointMiss.push(newPointOrMiss);
    newPlayer = { ...newPlayer, [pointOrMiss]: newPointMiss };
    newSinglesOneGameScore = { ...newSinglesOneGameScore, [pointOrMissPlayer]: newPlayer };
    newAllSinglesOneGameScore[currenSinglesGameOrder] = newSinglesOneGameScore;
    setSinglesAllOneGameScore(newAllSinglesOneGameScore);
    setOrderOfBall(orderBall + 1);
    resetModalState();
  };

  const backToSelectServisePlayer = () => {
    setServicePlayer(null);
    setServe(null);
    const allServeData = [...serveData];
    allServeData.pop();
    setServeData(allServeData);
    navigate('/gameScore');
  };

  const selectRally = () => {
    setRally(true);
    setPointOrMissButton(true);
    navigate('/gameScore');
  };

  const backToServe = () => {
    setRally(false);
    setPointOrMissButton(false);
    navigate('/modal/serve');
  };

  const backToServeResult = () => {
    setPointOrMissButton(false);
    navigate('/modal/serveResult');
  };

  const selectPointOrMiss = (pointOrMiss: PointOrMiss, playerNo: PlayerNo) => {
    setPointOrMiss(pointOrMiss);
    setPointOrMissPlayer(playerNo);
    navigate('/modal/foreOrBack');
  };

  const selectForeOrBack = (foreOrBack: ForeOrBack) => {
    setForeOrBack(foreOrBack);
    navigate('/modal/shotType');
  };

  const backToGameScoreFromForB = () => {
    setPointOrMiss(null);
    setPointOrMissPlayer(null);
    setForeOrBack(null);
    navigate('/gameScore');
  };

  const selectShotType = (shotType: ShotType) => {
    setShotType(shotType);
    if (shotType === POACH_VOLLEY) {
      navigate('/modal/poachCourse');
    } else {
      if (shotType === RECEIVE) {
        setRallyCount(2);
      }
      navigate('/modal/course');
    }
  };

  const backToForeOrBack = () => {
    setShotType(null);
    navigate('/modal/foreOrBack');
  };

  const backToShotType = () => {
    setCourse(null);
    setPoachVolleyCourse(null);
    navigate('/modal/shotType');
  };

  const selectCourse = (course: Course) => {
    if (pointOrMissPlayer === null) return;
    setCourse(course);
    if (pointOrMiss === POINT) {
      if (shotType === RECEIVE) {
        const newPointOrMiss: PointOrMissDetail = {
          gameNo,
          order: orderBall,
          serve,
          shotType,
          foreOrBack,
          course,
          poachVolleyCourse,
          missResult,
          rallyCount: 2,
        };
        addDetailPointMiss(newPointOrMiss);
        navigate('/gameScore');
      } else {
        navigate('/modal/countRally');
      }
    } else {
      navigate('/modal/missResult');
    }
  };

  const selectPoachVolleyCourse = (poachVolleyCouse: PoachVolleyCourse) => {
    setPoachVolleyCourse(poachVolleyCouse);
    if (pointOrMiss === POINT) {
      navigate('/modal/countRally');
    } else {
      navigate('/modal/missResult');
    }
  };

  const backToCourse = () => {
    setMissResult(null);
    if (shotType === POACH_VOLLEY) {
      navigate('/modal/poachCourse');
    } else {
      navigate('/modal/course');
    }
  };

  const selectMissResult = (missResult: MissResult) => {
    if (pointOrMissPlayer === null) return;
    if (shotType === RECEIVE) {
      const newPointOrMiss: PointOrMissDetail = {
        gameNo,
        order: orderBall,
        serve,
        shotType: RECEIVE,
        foreOrBack,
        course,
        poachVolleyCourse,
        missResult,
        rallyCount: 2,
      };
      addDetailPointMiss(newPointOrMiss);
      navigate('/gameScore');
    } else {
      setMissResult(missResult);
      navigate('/modal/countRally');
    }
  };

  const backToCourseOrMissResult = () => {
    if (pointOrMiss === POINT) {
      if (shotType === POACH_VOLLEY) {
        navigate('/modal/poachCourse');
      } else {
        navigate('/modal/course');
      }
    } else {
      navigate('/modal/missResult');
    }
  };

  const selectRallyCount = (rallyCount: RallyCount) => {
    if (pointOrMissPlayer === null) return;
    if (pointOrMiss === null) return;
    if (shotType === null) return;
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
    addDetailPointMiss(newPointOrMiss);
    navigate('/gameScore');
  };

  return {
    serve,
    rally,
    foreOrBack,
    shotType,
    course,
    poachVolleyCourse,
    missResult,
    servicePlayer,
    singlesAllOneGameScore,
    pointOrMissButton,
    selectServicePlayer,
    backToSelectServisePlayer,
    selectRally,
    backToServe,
    backToServeResult,
    selectPointOrMiss,
    selectForeOrBack,
    backToForeOrBack,
    backToGameScoreFromForB,
    selectShotType,
    selectCourse,
    selectPoachVolleyCourse,
    backToShotType,
    selectMissResult,
    backToCourse,
    backToCourseOrMissResult,
    selectRallyCount,
    creaAllState: resetModalState,
  };
};
