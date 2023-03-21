// import { atom, selector } from 'recoil';
import { atom } from 'recoil';
import {
  Player,
  PointOrMissState,
  Serve,
  ForeOrBack,
  ShotType,
  Course,
  PoachVolleyCourse,
  RallyCount,
  GameScore,
  MissResult,
  OrderOfBallState,
  PlayerNo,
  // PointOrMiss,
  // DisplayPointOrMiss,
} from './type';

const defaultSinglseGameScoreState: GameScore = {
  player1: {
    player: null,
    point: [],
    miss: [],
  },
  player2: {
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

// export const player1_PointListState = atom<PointOrMiss[]>({
//   key: 'player1_PointListState',
//   default: [],
// });

// export const player1_MissListState = atom<PointOrMiss[]>({
//   key: 'player1_MissListState',
//   default: [],
// });

// export const player2_PointListState = atom<PointOrMiss[]>({
//   key: 'player2_PointListState',
//   default: [],
// });

// export const player2_MissListState = atom<PointOrMiss[]>({
//   key: 'player2_MissListState',
//   default: [],
// });

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
  default: 1,
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

export const singlesGameScoreState = atom<GameScore>({
  key: 'singlesGameScoreState',
  default: defaultSinglseGameScoreState,
});

export const pointOrMissPlayerState = atom<PlayerNo | null>({
  key: 'pointOrMissPlayerState',
  default: null,
});

//画面に表示するように、値を組み合わせた新しいstateを作成しようとした
// export const player1MissListState = selector<DisplayPointOrMiss[]>({
//   key: 'player1MissListState',
//   get: ({ get }) => {
//     const singlesGameScore = get(singlesGameScoreState);
//     const newPlayer1MissList = singlesGameScore.player_1.miss;
//     const newPlayer1MissListOrder= newPlayer1MissList.map((player1Miss) => {
//       player1Miss.detailResult =
//     })

//     }
//   },
// });
