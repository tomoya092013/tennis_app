export type PlayerNo = 'player1' | 'player2';
export type PointOrMiss = 'point' | 'miss';
export type OrderBallState = number;
export type Serve = 'ファーストサーブ' | 'セカンドサーブ';
export type ShotType = 'Sa' | 'Df' | 'R' | 'ST' | 'V' | 'Pv' | 'Sm' | 'Etc';
export type ForeOrBack = 'F' | 'B';
export type Course = 'Cr' | 'Cr!' | 'St' | 'Md';
export type PoachVolleyCourse = 'Cr' | 'Cr!' | '右St' | '左St';
export type MissResult = 'N' | 'Bo' | 'So' | 'Etc';
export type RallyCount = number;
export type TeamGame = 'team1Game' | 'team2Game';

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
  serveType: Serve | null;
  shotType: ShotType;
  foreOrBack?: ForeOrBack | null;
  course?: Course | null;
  poachVolleyCourse?: PoachVolleyCourse | null;
  missResult?: MissResult | null;
  rallyCount?: RallyCount;
};

export type SinglesOneGameScore = {
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
  team1Game: SinglesGamePoint[];
  team2Game: SinglesGamePoint[];
};
