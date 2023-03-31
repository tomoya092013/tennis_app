import { atom, selector } from 'recoil';
import {
  Player,
  PointOrMiss,
  Serve,
  ForeOrBack,
  ShotType,
  Course,
  PoachVolleyCourse,
  RallyCount,
  MissResult,
  OrderBallState,
  PlayerNo,
  SinglesDetailData,
  SinglesGamePoint,
  SinglesGameCount,
  PointOrMissButton,
} from './type';

export const defaultSinglesDetailDataState: SinglesDetailData = {
  player1: {
    player: null,
    serveData: null,
    point: [],
    miss: [],
  },
  player2: {
    player: null,
    serveData: null,
    point: [],
    miss: [],
  },
};

export const defaultOrderBallState: number = 1;

const defaultSinglesGameCountState: SinglesGameCount = {
  team1: [],
  team2: [],
  everyGameWinner: [],
  winner: null,
};

export const gameTypeState = atom<'シングルス' | 'ダブルス' | null>({
  key: 'gameTypeState',
  default: null,
});

export const gameMatchState = atom<5 | 7 | 9 | null>({
  key: 'gameMatchListState',
  default: null,
});

export const tieBreakState = atom<'あり' | 'なし' | null>({
  key: 'tieBreakState',
  default: null,
});

export const playerListState = atom<Player[]>({
  key: 'playerListState',
  default: [],
});

export const pointOrMissState = atom<PointOrMiss | null>({
  key: 'pointOrMissState',
  default: null,
});

export const pointOrMissButtonState = atom<PointOrMissButton>({
  key: 'pointOrMissButtonState',
  default: false,
});

export const serveState = atom<Serve | null>({
  key: 'serveState',
  default: null,
});

export const rallyState = atom<boolean>({
  key: 'rallyState',
  default: false,
});
export const orderBallState = atom<OrderBallState>({
  key: 'orderBallState',
  default: defaultOrderBallState,
});
export const foreOrBackState = atom<ForeOrBack | null>({
  key: 'foreOrBackState',
  default: null,
});
export const shotTypeState = atom<ShotType | null>({
  key: 'shotTypeState',
  default: null,
});
export const courseState = atom<Course | null>({
  key: 'courseState',
  default: null,
});
export const poachVolleyCourseStaet = atom<PoachVolleyCourse | null>({
  key: 'poachVolleyCourseStaet',
  default: null,
});
export const missResultState = atom<MissResult | null>({
  key: 'missResultState',
  default: null,
});
export const rallyCountState = atom<RallyCount | null>({
  key: 'rallyCountState',
  default: null,
});

export const servicePlayerState = atom<PlayerNo | null>({
  key: 'servicePlayerState',
  default: null,
});

export const pointOrMissPlayerState = atom<PlayerNo | null>({
  key: 'pointOrMissPlayerState',
  default: null,
});

export const singlesGameCountState = atom<SinglesGameCount>({
  key: 'singlesGameCountState',
  default: defaultSinglesGameCountState,
});

export const singlesDetailDataState = atom<SinglesDetailData[]>({
  key: 'singlesDetailDataState',
  default: [defaultSinglesDetailDataState],
});

export const allSinglesGamePointState = selector<SinglesGamePoint[]>({
  key: 'allSinglesGamePointState',
  get: ({ get }) => {
    const singlesAllOneGameScore = get(singlesDetailDataState);
    const singlesAllOneGamePoint = singlesAllOneGameScore.map((currentSinglesGamePoint) => {
      const player1Point = currentSinglesGamePoint.player1.point.length;
      const player1Miss = currentSinglesGamePoint.player1.miss.length;
      const player2Point = currentSinglesGamePoint.player2.point.length;
      const player2Miss = currentSinglesGamePoint.player2.miss.length;
      return {
        team1Point: player1Point + player2Miss,
        team2Point: player2Point + player1Miss,
      };
    });
    return singlesAllOneGamePoint;
  },
});
