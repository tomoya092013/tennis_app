export type GameType = {
  id: number;
  selectGame: string;
  isSelected: boolean;
};

export type Player = {
  name: string;
};

export type Point = {
  serviceAse: number;
};

export type Miss = {
  doubleFault: number;
};

export type GameScore = {
  player1: {
    player: Player;
    points: Point;
    misses: Miss;
  };
  player2: {
    player: Player;
    points: Point[];
    misses: Miss[];
  };
};
