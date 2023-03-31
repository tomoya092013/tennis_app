import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  courseState,
  foreOrBackState,
  missResultState,
  orderBallState,
  poachVolleyCourseStaet,
  pointOrMissButtonState,
  pointOrMissPlayerState,
  pointOrMissState,
  rallyCountState,
  rallyState,
  serveState,
  servicePlayerState,
  shotTypeState,
  singlesDetailDataState,
} from './store';
import {
  PointOrMissDetail,
  PointOrMiss,
  Serve,
  ForeOrBack,
  ShotType,
  Course,
  PoachVolleyCourse,
  MissResult,
  PlayerNo,
  RallyCount,
} from './type';
import { useGameScore } from './useGameScore';

export const FIRST_SERVE = 'ファーストサーブ';
export const SECOND_SERVE = 'セカンドサーブ';
export const SERVICEACE = 'Sa';
export const DOUBLE_FAULT = 'Df';
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
  const [poachVolleyCourse, setPoachVolleyCourse] = useRecoilState(poachVolleyCourseStaet);
  const [missResult, setMissResult] = useRecoilState(missResultState);
  // eslint-disable-next-line no-unused-vars
  const [rallyCount, setRallyCount] = useRecoilState(rallyCountState);
  const [servicePlayer, setServicePlayer] = useRecoilState(servicePlayerState);
  const [pointOrMissPlayer, setPointOrMissPlayer] = useRecoilState(pointOrMissPlayerState);
  const [singlesAllOneGameScore, setSinglesAllOneGameScore] = useRecoilState(singlesDetailDataState);

  const navigate = useNavigate();
  const { currenSinglesGameOrder } = useGameScore();

  const creaAllState = () => {
    setPointOrMissButton(false);
    setPointOrMissPlayer(null);
    setServicePlayer(null);
    setServe(null);
    setRally(false);
    setPointOrMiss(null);
    setForeOrBack(null);
    setShotType(null);
    setCourse(null);
    setPoachVolleyCourse(null);
    setMissResult(null);
  };

  const selectServicePlayer = (playerNo: PlayerNo) => {
    setServicePlayer(playerNo);
    navigate('/modal/serve');
  };

  const selectServe = (serve: Serve) => {
    setServe(serve);
    navigate('/modal/serveResult');
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
    creaAllState();
  };

  const addDoubleFault = () => {
    if (servicePlayer === null) return;
    const newPointOrMiss: PointOrMissDetail = {
      order: orderBall,
      serve: SECOND_SERVE,
      shotType: DOUBLE_FAULT,
    };
    const newAllSinglesOneGameScore = [...singlesAllOneGameScore];
    let newSinglesOneGameScore = { ...newAllSinglesOneGameScore[currenSinglesGameOrder] };
    let newPlayer = { ...newSinglesOneGameScore[servicePlayer] };
    const newMiss = [...newPlayer.miss];
    newMiss.push(newPointOrMiss);
    newPlayer = { ...newPlayer, miss: newMiss };
    newSinglesOneGameScore = { ...newSinglesOneGameScore, [servicePlayer]: newPlayer };
    newAllSinglesOneGameScore[currenSinglesGameOrder] = newSinglesOneGameScore;
    setSinglesAllOneGameScore(newAllSinglesOneGameScore);
    setOrderOfBall(orderBall + 1);
    creaAllState();
    navigate('/gameScore');
  };

  const backToSelectServisePlayer = () => {
    setServicePlayer(null);
    setServe(null);
    navigate('/gameScore');
  };

  const addServiceAce = () => {
    if (servicePlayer === null) return;
    const newPointOrMiss: PointOrMissDetail = {
      order: orderBall,
      // eslint-disable-next-line object-shorthand
      serve: serve,
      shotType: SERVICEACE,
    };
    const newAllSinglesOneGameScore = [...singlesAllOneGameScore];
    let newSinglesOneGameScore = { ...newAllSinglesOneGameScore[currenSinglesGameOrder] };
    let newPlayer = { ...newSinglesOneGameScore[servicePlayer] };
    const newPoint = [...newPlayer.point];
    newPoint.push(newPointOrMiss);
    newPlayer = { ...newPlayer, point: newPoint };
    newSinglesOneGameScore = { ...newSinglesOneGameScore, [servicePlayer]: newPlayer };
    newAllSinglesOneGameScore[currenSinglesGameOrder] = newSinglesOneGameScore;
    setSinglesAllOneGameScore(newAllSinglesOneGameScore);
    setOrderOfBall(orderBall + 1);
    creaAllState();
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
          order: orderBall,
          // eslint-disable-next-line object-shorthand
          serve: serve,
          // eslint-disable-next-line object-shorthand
          shotType: shotType,
          // eslint-disable-next-line object-shorthand
          foreOrBack: foreOrBack,
          // eslint-disable-next-line object-shorthand
          course: course,
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
        order: orderBall,
        // eslint-disable-next-line object-shorthand
        serve: serve,
        shotType: RECEIVE,
        // eslint-disable-next-line object-shorthand
        foreOrBack: foreOrBack,
        // eslint-disable-next-line object-shorthand
        course: course,
        // eslint-disable-next-line object-shorthand
        missResult: missResult,
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
      order: orderBall,
      // eslint-disable-next-line object-shorthand
      serve: serve,
      // eslint-disable-next-line object-shorthand
      shotType: shotType,
      // eslint-disable-next-line object-shorthand
      foreOrBack: foreOrBack,
      // eslint-disable-next-line object-shorthand
      course: course,
      // eslint-disable-next-line object-shorthand
      poachVolleyCourse: poachVolleyCourse,
      // eslint-disable-next-line object-shorthand
      missResult: missResult,
      // eslint-disable-next-line object-shorthand
      rallyCount: rallyCount,
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
    selectServe,
    addDoubleFault,
    backToSelectServisePlayer,
    addServiceAce,
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
    creaAllState,
  };
};
