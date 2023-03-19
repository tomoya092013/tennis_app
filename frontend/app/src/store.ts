import { atom } from 'recoil';
import {
  Player,
  PointOrMissState,
  Serve,
  ForeOrBack,
  ShotType,
  Course,
  PoachVolleyCourse,
  CountRally,
  GameScore,
  MissResult,
  OrderOfBallState,
  PointOrMiss,
} from './type';

const defaultSinglseGameScoreState: GameScore = {
  player_1: {
    player: null,
    point: [],
    miss: [],
  },
  player_2: {
    player: null,
    point: [],
    miss: [],
  },
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

// export const selectPlayerState = atom<Player | null>({
//   key: 'selectPlayerState',
//   default: null,
// });

// export const enableAddServeState = atom<boolean>({
//   key: 'enableAddServeState',
//   default: true,
// });

// export const enableAddShotState = atom<boolean>({
//   key: 'enableAddShotState',
//   default: false,
// });

export const modalShowState = atom<boolean>({
  key: 'modalShowState',
  default: false,
});

export const player1_PointListState = atom<PointOrMiss[]>({
  key: 'player1_PointListState',
  default: [],
});

export const player1_MissListState = atom<PointOrMiss[]>({
  key: 'player1_MissListState',
  default: [],
});

export const player2_PointListState = atom<PointOrMiss[]>({
  key: 'player2_PointListState',
  default: [],
});

export const player2_MissListState = atom<PointOrMiss[]>({
  key: 'player2_MissListState',
  default: [],
});

export const singlesGameScoreState = atom<GameScore>({
  key: 'singlesGameScoreState',
  default: defaultSinglseGameScoreState,
});

export const pointOrMissState = atom<PointOrMissState | null>({
  key: 'pointOrMissState',
  default: null,
});

export const serveState = atom<Serve | null>({
  key: 'serveState',
  default: null,
});

export const rallyState = atom<boolean>({
  key: 'rallyState',
  default: false,
});
export const orderOfBallState = atom<OrderOfBallState>({
  key: 'orderOfBallState',
  default: 0,
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
export const countRallyState = atom<CountRally | null>({
  key: 'countRallyState',
  default: null,
});
