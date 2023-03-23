export type PlayerNo = 'player1' | 'player2';
export type PointOrMiss = 'point' | 'miss';
export type OrderOfBallState = number;
export type Serve = 'ファーストサーブ' | 'セカンドサーブ';
export type ShotType = 'Sa' | 'Df' | 'R' | 'ST' | 'V' | 'Pv' | 'Sm' | 'Etc';
export type ForeOrBack = 'F' | 'B';
export type Course = 'Cr' | 'Cr!' | 'St' | 'Md';
export type PoachVolleyCourse = 'Cr' | 'Cr!' | '右St' | '左St';
export type MissResult = 'N' | 'Bo' | 'So' | 'Etc';
export type RallyCount = number;

export type GameType = {
  id: number;
  selectGame: string;
  isSelected: boolean;
};

export type Player = {
  name: string;
  playerNo: PlayerNo;
};

// export type PointOrMiss = {
//   order: number;
//   result: string | null;
// };

//プレイヤーが打ったサーブの情報
export type ServeData = {
  toatal: number;
  serve: Serve;
};

//このserveはどの種類のサーブではじまったかを示すため
export type PointOrMissDetail = {
  order: number;
  serveType: Serve | null;
  shotType: ShotType;
  foreOrBack?: ForeOrBack | null;
  course?: Course | null;
  poachVolleyCourse?: PoachVolleyCourse | null;
  missResult?: MissResult | null;
  rallyCount?: RallyCount;
};

export type SinglesGameScore = {
  player1: {
    player: Player | null;
    serveData: ServeData | null;
    point: PointOrMissDetail[];
    miss: PointOrMissDetail[];
  };
  player2: {
    player: Player | null;
    serveData: ServeData | null;
    point: PointOrMissDetail[];
    miss: PointOrMissDetail[];
  };
};
