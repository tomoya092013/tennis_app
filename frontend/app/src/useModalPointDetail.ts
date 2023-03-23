import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  courseState,
  foreOrBackState,
  missResultState,
  orderOfBallState,
  poachVolleyCourseStaet,
  pointOrMissPlayerState,
  pointOrMissState,
  rallyCountState,
  rallyState,
  serveState,
  servicePlayerState,
  shotTypeState,
  singlesGameScoreState,
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
  const [orderOfBall, setOrderOfBall] = useRecoilState(orderOfBallState);
  const [pointOrMiss, setPointOrMiss] = useRecoilState(pointOrMissState);
  const [serve, setServe] = useRecoilState(serveState);
  const [rally, setRally] = useRecoilState(rallyState);
  const [foreOrBack, setForeOrBack] = useRecoilState(foreOrBackState);
  const [shotType, setShotType] = useRecoilState(shotTypeState);
  const [course, setCourse] = useRecoilState(courseState);
  const [poachVolleyCourse, setPoachVolleyCourse] = useRecoilState(poachVolleyCourseStaet);
  const [missResult, setMissResult] = useRecoilState(missResultState);
  // eslint-disable-next-line no-unused-vars
  const [rallyCount, setRallyCount] = useRecoilState(rallyCountState);
  const [singlesGameScore, setSinglesGameScore] = useRecoilState(singlesGameScoreState);
  const [servicePlayer, setServicePlayer] = useRecoilState(servicePlayerState);
  const [pointOrMissPlayer, setPointOrMissPlayer] = useRecoilState(pointOrMissPlayerState);

  const navigate = useNavigate();

  const selectServicePlayer = (playerNo: PlayerNo) => {
    setServicePlayer(playerNo);
    // navigate('/modal/serve', { state: playerNo });
    navigate('/modal/serve');
  };

  const selectServe = (serve: Serve) => {
    setServe(serve);
    navigate('/modal/serveResult');
  };

  const addDoubleFault = () => {
    if (servicePlayer === null) return;
    const newPointOrMiss: PointOrMissDetail = {
      order: orderOfBall,
      serveType: SECOND_SERVE,
      shotType: DOUBLE_FAULT,
    };
    let newSinglesGameScore = { ...singlesGameScore };
    let newPlayer = { ...newSinglesGameScore[servicePlayer] };
    const newMiss = [...newPlayer.miss];
    newMiss.push(newPointOrMiss);
    newPlayer = { ...newPlayer, miss: newMiss };
    newSinglesGameScore = { ...newSinglesGameScore, [servicePlayer]: newPlayer };
    setSinglesGameScore(newSinglesGameScore);
    setOrderOfBall(orderOfBall + 1);
    navigate('/gameScore');
  };

  const backToSelectServisePlayer = () => {
    setServicePlayer(null);
    navigate('/gameScore');
  };

  const addServiceAce = () => {
    if (servicePlayer === null) return;
    const newPointOrMiss: PointOrMissDetail = {
      order: orderOfBall,
      serveType: serve,
      shotType: SERVICEACE,
    };
    let newSinglesGameScore = { ...singlesGameScore };
    let newPlayer = { ...singlesGameScore[servicePlayer] };
    const newPoint = [...newPlayer.point];
    newPoint.push(newPointOrMiss);
    newPlayer = { ...newPlayer, point: newPoint };
    newSinglesGameScore = { ...singlesGameScore, [servicePlayer]: newPlayer };
    setSinglesGameScore(newSinglesGameScore);
    setOrderOfBall(orderOfBall + 1);
    setServe(null);
    setServicePlayer(null);
    navigate('/gameScore');
  };

  const selectRally = () => {
    setRally(true);
    navigate('/gameScore');
  };

  const backToServe = () => {
    setRally(false);
    navigate('/modal/serve');
  };

  const backToServeResult = () => {
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
          order: orderOfBall,
          // result: `${foreOrBack + shotType + course}(${2})`,
          serveType: serve,
          // eslint-disable-next-line object-shorthand
          shotType: shotType,
          // eslint-disable-next-line object-shorthand
          foreOrBack: foreOrBack,
          // eslint-disable-next-line object-shorthand
          course: course,
          rallyCount: 2,
        };
        let newSinglesGameScore = { ...singlesGameScore };
        let newPlayer = { ...newSinglesGameScore[pointOrMissPlayer] };
        const newPoint = [...newPlayer.point];
        newPoint.push(newPointOrMiss);
        newPlayer = { ...newPlayer, point: newPoint };
        newSinglesGameScore = { ...newSinglesGameScore, [pointOrMissPlayer]: newPlayer };
        setSinglesGameScore(newSinglesGameScore);
        setOrderOfBall(orderOfBall + 1);
        creaAllState();
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
        order: orderOfBall,
        serveType: serve,
        shotType: RECEIVE,
        // eslint-disable-next-line object-shorthand
        foreOrBack: foreOrBack,
        // eslint-disable-next-line object-shorthand
        course: course,
        // eslint-disable-next-line object-shorthand
        missResult: missResult,
        rallyCount: 2,
      };
      let newSinglesGameScore = { ...singlesGameScore };
      let newPlayer = { ...newSinglesGameScore[pointOrMissPlayer] };
      const newMiss = [...newPlayer.miss, newPointOrMiss];
      newPlayer = { ...newPlayer, miss: newMiss };
      newSinglesGameScore = { ...newSinglesGameScore, [pointOrMissPlayer]: newPlayer };
      setSinglesGameScore(newSinglesGameScore);
      setOrderOfBall(orderOfBall + 1);
      creaAllState();
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
      order: orderOfBall,
      serveType: serve,
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
    let newSinglesGameScore = { ...singlesGameScore };
    let newPlayer = { ...newSinglesGameScore[pointOrMissPlayer] };
    const newPointMiss = [...newPlayer[pointOrMiss], newPointOrMiss];
    newPlayer = { ...newPlayer, [pointOrMiss]: newPointMiss };
    newSinglesGameScore = { ...newSinglesGameScore, [pointOrMissPlayer]: newPlayer };
    setSinglesGameScore(newSinglesGameScore);
    setOrderOfBall(orderOfBall + 1);
    creaAllState();
    navigate('/gameScore');
  };

  const creaAllState = () => {
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

  return {
    serve,
    rally,
    foreOrBack,
    shotType,
    course,
    poachVolleyCourse,
    missResult,
    singlesGameScore,
    servicePlayer,
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
  };
};
