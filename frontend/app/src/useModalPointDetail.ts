// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  countRallyState,
  courseState,
  foreOrBackState,
  missResultState,
  orderOfBallState,
  poachVolleyCourseStaet,
  pointOrMissState,
  rallyState,
  serveState,
  shotTypeState,
} from './store';
import { PointOrMissState, Serve, ForeOrBack, ShotType, Course, PoachVolleyCourse, MissResult } from './type';

export const FIRST_SERVE = 'ファーストサーブ';
export const SECOND_SERVE = 'セカンドサーブ';
export const FORE_HAND = 'F';
export const BACK_HAND = 'B';
export const POINT = 'ポイント';
export const MISS = 'ミス';
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
  const [countRally, setCountRally] = useRecoilState(countRallyState);

  const navigate = useNavigate();

  const goToSelectServe = () => {
    navigate('/modal/serve');
  };

  const selectServe = (serve: Serve) => {
    setServe(serve);
    navigate('/modal/serveResult');
  };

  const addDoubleFault = () => {
    setServe(null);
    navigate('/gameScore');
  };

  const addServiceAce = () => {
    setServe(null);
    setRally(false);
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

  const selectPointOrMiss = (pointOrMiss: PointOrMissState) => {
    setPointOrMiss(pointOrMiss);
    navigate('/modal/foreOrBack');
  };

  const backToGameScoreFromForB = () => {
    setPointOrMiss(null);
    setForeOrBack(null);
    navigate('/gameScore');
  };

  const selectForeOrBack = (foreOrBack: ForeOrBack) => {
    setForeOrBack(foreOrBack);
    navigate('/modal/shotType');
  };

  const selectShotType = (shotTypeState: ShotType) => {
    setShotType(shotTypeState);
    if (shotTypeState === POACH_VOLLEY) {
      navigate('/modal/poachCourse');
    } else {
      navigate('/modal/course');
    }
  };

  const backToForeOrBack = () => {
    setShotType(null);
    navigate('/modal/foreOrBack');
  };

  const selectCourse = (course: Course) => {
    setCourse(course);
    if (pointOrMiss === POINT) {
      if (shotType === RECEIVE) {
        //ラリー数2を追加
        setServe(null);
        setRally(false);
        setPointOrMiss(null);
        setForeOrBack(null);
        setShotType(null);
        setCourse(null);
        setPoachVolleyCourse(null);
        navigate('/gameScore');
      } else {
        navigate('/modal/countRally');
      }
    } else {
      navigate('/modal/missResult');
    }
  };

  const selectPoachVolleyCourse = (poachVolleyCouse: PoachVolleyCourse) => {
    //本来は登録処理
    setPoachVolleyCourse(poachVolleyCouse);
    if (pointOrMiss === POINT) {
      if (shotType === RECEIVE) {
        //ラリー数2を追加処理必要
        setServe(null);
        setRally(false);
        setPointOrMiss(null);
        setForeOrBack(null);
        setShotType(null);
        setCourse(null);
        setPoachVolleyCourse(null);
        navigate('/gameScore');
      } else {
        navigate('/modal/countRally');
      }
    } else {
      navigate('/modal/missResult');
    }
  };

  const backToShotType = () => {
    setCourse(null);
    setPoachVolleyCourse(null);
    navigate('/modal/shotType');
  };

  const selectMissResult = (missResult: MissResult) => {
    //本来は登録処理
    setMissResult(missResult);
    if (shotType === RECEIVE) {
      //ラリー数2を追加処理必要
      setServe(null);
      setRally(false);
      setPointOrMiss(null);
      setForeOrBack(null);
      setShotType(null);
      setCourse(null);
      setPoachVolleyCourse(null);
      setMissResult(null);
      navigate('/gameScore');
    } else {
      navigate('/modal/countRally');
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

  return {
    serve,
    rally,
    foreOrBack,
    shotType,
    course,
    poachVolleyCourse,
    missResult,
    goToSelectServe,
    selectServe,
    addDoubleFault,
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
  };
};
