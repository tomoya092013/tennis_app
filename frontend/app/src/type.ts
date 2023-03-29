export type PlayerNo = 'player1' | 'player2';
export type PointOrMiss = 'point' | 'miss';
export type PointOrMissButton = boolean;
export type OrderBallState = number;
export type Serve = 'ファーストサーブ' | 'セカンドサーブ' | 'Close';
export type ShotType = 'Sa' | 'Df' | 'R' | 'ST' | 'V' | 'Pv' | 'Sm' | 'Etc';
export type ForeOrBack = 'F' | 'B';
export type Course = 'Cr' | 'Cr!' | 'St' | 'Md';
export type PoachVolleyCourse = 'Cr' | 'Cr!' | '右St' | '左St';
export type MissResult = 'N' | 'Bo' | 'So' | 'Etc';
export type RallyCount = number;
export type Team = 'team1' | 'team2';

export type GameType = {
  id: number;
  selectGame: string;
  isSelected: boolean;
};

export type Player = {
  name: string;
  playerNo: PlayerNo;
};

export type ServeData = {
  toatal: number;
  serve: Serve;
};

export type PointOrMissDetail = {
  order: number;
  serve: Serve | null;
  shotType: ShotType;
  foreOrBack?: ForeOrBack | null;
  course?: Course | null;
  poachVolleyCourse?: PoachVolleyCourse | null;
  missResult?: MissResult | null;
  rallyCount?: RallyCount;
};

export type SinglesDetailData = {
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

export type SinglesGamePoint = {
  team1Point: number;
  team2Point: number;
};

export type SinglesGameCount = {
  team1: SinglesGamePoint[];
  team2: SinglesGamePoint[];
  everyGameWinner: Team[];
  winner: Team | null;
};
