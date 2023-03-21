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
  shotTypeState,
  singlesGameScoreState,
} from './store';
import {
  PointOrMiss,
  PointOrMissState,
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
  const [rallyCount, setRallyCount] = useRecoilState(rallyCountState);
  const [singlesGameScore, setSinglesGameScore] = useRecoilState(singlesGameScoreState);
  const [pointOrMissPlayer, setPointOrMissPlayer] = useRecoilState(pointOrMissPlayerState);

  const navigate = useNavigate();

  const selectServicePlayer = (playerNo: PlayerNo) => {
    navigate('/modal/serve', { state: playerNo });
  };

  const selectServe = (serve: Serve, playerNo: PlayerNo) => {
    setServe(serve);
    navigate('/modal/serveResult', { state: playerNo });
  };

  const addDoubleFault = (playerNo: PlayerNo) => {
    setServe(null);
    const newPointOrMiss: PointOrMiss = {
      order: orderOfBall,
      result: DOUBLE_FAULT,
    };

    let newSinglesGameScore = { ...singlesGameScore };
    let newPlayer = { ...newSinglesGameScore[playerNo] };
    const newMiss = [...newPlayer.miss];
    newMiss.push(newPointOrMiss);
    newPlayer = { ...newPlayer, miss: newMiss };
    newSinglesGameScore = { ...newSinglesGameScore, [playerNo]: newPlayer };

    setSinglesGameScore(newSinglesGameScore);

    setOrderOfBall(orderOfBall + 1);
    navigate('/gameScore');
  };

  const backToSelectServisePlayer = () => {
    navigate('/gameScore');
  };

  const addServiceAce = (playerNo: PlayerNo) => {
    const newPointOrMiss: PointOrMiss = {
      order: orderOfBall,
      result: SERVICEACE,
    };
    if (playerNo === 'player1') {
      const newSinglesGameScore = {
        ...singlesGameScore,
        player_1: { ...singlesGameScore.player1, point: [...singlesGameScore.player1.point, newPointOrMiss] },
      };
      setSinglesGameScore(newSinglesGameScore);
    } else if (playerNo === 'player2') {
      const newSinglesGameScore = {
        ...singlesGameScore,
        player_2: { ...singlesGameScore.player2, point: [...singlesGameScore.player2.point, newPointOrMiss] },
      };
      setSinglesGameScore(newSinglesGameScore);
    }
    setOrderOfBall(orderOfBall + 1);
    setServe(null);
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
      if (shotTypeState === RECEIVE) {
        setRallyCount(2);
      }
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
        const newPointOrMiss: PointOrMiss = {
          order: orderOfBall,
          result: `${foreOrBack + shotType + course}(${2})`,
        };
        if (pointOrMissPlayer === 'player1') {
          const newSingleGameScore = {
            ...singlesGameScore,
            player_1: { ...singlesGameScore.player1, point: [...singlesGameScore.player1.point, newPointOrMiss] },
          };
          setSinglesGameScore(newSingleGameScore);
        } else if (pointOrMissPlayer === 'player2') {
          const newSingleGameScore = {
            ...singlesGameScore,
            player_2: { ...singlesGameScore.player2, point: [...singlesGameScore.player2.point, newPointOrMiss] },
          };
          setSinglesGameScore(newSingleGameScore);
        }
        setOrderOfBall(orderOfBall + 1);
        setServe(null);
        setRally(false);
        setPointOrMiss(null);
        setForeOrBack(null);
        setShotType(null);
        setCourse(null);
        setPoachVolleyCourse(null);
        setPointOrMissPlayer(null);
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

  const backToShotType = () => {
    setCourse(null);
    setPoachVolleyCourse(null);
    navigate('/modal/shotType');
  };

  const selectMissResult = (missResult: MissResult) => {
    if (shotType === RECEIVE) {
      const newPointOrMiss: PointOrMiss = {
        order: orderOfBall,
        result: `${foreOrBack + shotType + course + missResult}(${2})`,
      };
      if (pointOrMissPlayer === 'player1') {
        const newSingleGameScore = {
          ...singlesGameScore,
          player_1: { ...singlesGameScore.player1, miss: [...singlesGameScore.player1.miss, newPointOrMiss] },
        };
        setSinglesGameScore(newSingleGameScore);
      } else if (pointOrMissPlayer === 'player2') {
        const newSingleGameScore = {
          ...singlesGameScore,
          player_2: { ...singlesGameScore.player2, miss: [...singlesGameScore.player2.miss, newPointOrMiss] },
        };
        setSinglesGameScore(newSingleGameScore);
      }
      setOrderOfBall(orderOfBall + 1);
      setServe(null);
      setRally(false);
      setPointOrMiss(null);
      setForeOrBack(null);
      setShotType(null);
      setCourse(null);
      setMissResult(null);
      navigate('/gameScore');
    } else {
      setMissResult(missResult);
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

  const selectPointOrMiss = (pointOrMiss: PointOrMissState, playerNo: PlayerNo) => {
    setPointOrMiss(pointOrMiss);
    setPointOrMissPlayer(playerNo);
    navigate('/modal/foreOrBack');
  };

  const selectRallyCount = (rallyCount: RallyCount) => {
    if (pointOrMiss === POINT) {
      if (shotType === POACH_VOLLEY) {
        const newPointOrMiss: PointOrMiss = {
          order: orderOfBall,
          result: `${foreOrBack + shotType + poachVolleyCourse} (${rallyCount})`,
        };
        if (pointOrMissPlayer === 'player1') {
          const newSingleGameScore = {
            ...singlesGameScore,
            player_1: { ...singlesGameScore.player1, point: [...singlesGameScore.player1.point, newPointOrMiss] },
          };
          setSinglesGameScore(newSingleGameScore);
        } else if (pointOrMissPlayer === 'player2') {
          const newSingleGameScore = {
            ...singlesGameScore,
            player_2: { ...singlesGameScore.player2, point: [...singlesGameScore.player2.point, newPointOrMiss] },
          };
          setSinglesGameScore(newSingleGameScore);
        }
      } else {
        const newPointOrMiss: PointOrMiss = {
          order: orderOfBall,
          result: `${foreOrBack + shotType + course} (${rallyCount})`,
        };
        if (pointOrMissPlayer === 'player1') {
          const newSingleGameScore = {
            ...singlesGameScore,
            player_1: { ...singlesGameScore.player1, point: [...singlesGameScore.player1.point, newPointOrMiss] },
          };
          setSinglesGameScore(newSingleGameScore);
        } else if (pointOrMissPlayer === 'player2') {
          const newSingleGameScore = {
            ...singlesGameScore,
            player_2: { ...singlesGameScore.player2, point: [...singlesGameScore.player2.point, newPointOrMiss] },
          };
          setSinglesGameScore(newSingleGameScore);
        }
      }
      setOrderOfBall(orderOfBall + 1);
      setServe(null);
      setRally(false);
      setPointOrMiss(null);
      setForeOrBack(null);
      setShotType(null);
      setCourse(null);
      setPoachVolleyCourse(null);
      setPointOrMissPlayer(null);
      setMissResult(null);
      navigate('/gameScore');
    } else {
      if (shotType === POACH_VOLLEY) {
        const newPointOrMiss: PointOrMiss = {
          order: orderOfBall,
          result: `${foreOrBack + shotType + poachVolleyCourse + missResult} (${rallyCount})`,
        };
        if (pointOrMissPlayer === 'player1') {
          const newSingleGameScore = {
            ...singlesGameScore,
            player_1: { ...singlesGameScore.player1, miss: [...singlesGameScore.player1.miss, newPointOrMiss] },
          };
          setSinglesGameScore(newSingleGameScore);
        } else if (pointOrMissPlayer === 'player2') {
          const newSingleGameScore = {
            ...singlesGameScore,
            player_2: { ...singlesGameScore.player2, miss: [...singlesGameScore.player2.miss, newPointOrMiss] },
          };
          setSinglesGameScore(newSingleGameScore);
        }
      } else {
        const newPointOrMiss: PointOrMiss = {
          order: orderOfBall,
          result: `${foreOrBack + shotType + course + missResult} (${rallyCount})`,
        };
        if (pointOrMissPlayer === 'player1') {
          const newSingleGameScore = {
            ...singlesGameScore,
            player_1: { ...singlesGameScore.player1, miss: [...singlesGameScore.player1.miss, newPointOrMiss] },
          };
          setSinglesGameScore(newSingleGameScore);
        } else if (pointOrMissPlayer === 'player2') {
          const newSingleGameScore = {
            ...singlesGameScore,
            player_2: { ...singlesGameScore.player2, miss: [...singlesGameScore.player2.miss, newPointOrMiss] },
          };
          setSinglesGameScore(newSingleGameScore);
        }
      }
      setOrderOfBall(orderOfBall + 1);
      setServe(null);
      setRally(false);
      setPointOrMiss(null);
      setForeOrBack(null);
      setShotType(null);
      setCourse(null);
      setPoachVolleyCourse(null);
      setPointOrMissPlayer(null);
      setMissResult(null);
      navigate('/gameScore');
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
    singlesGameScore,
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
    selectRallyCount,
  };
};
