export type PlayerNo = 'player1' | 'player2';
export type PointOrMissState = 'ポイント' | 'ミス';
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

export type PointOrMiss = {
  order: number;
  result: string | null;
};

export type GameScore = {
  player1: {
    player: Player | null;
    point: PointOrMiss[];
    miss: PointOrMiss[];
  };
  player2: {
    player: Player | null;
    point: PointOrMiss[];
    miss: PointOrMiss[];
  };
};
