import { atom, selector } from 'recoil';
import { GameMatch, GameType, TieBreak } from './type';

const dfaultGameTypeState: GameType[] = [
  { id: 1, selectGame: 'シングルス', isSelected: false },
  { id: 2, selectGame: 'ダブルス', isSelected: false },
];

const defaultGameMatchState: GameMatch[] = [
  { id: 1, selectGameMatch: 5, isSelected: false },
  { id: 2, selectGameMatch: 7, isSelected: false },
  { id: 3, selectGameMatch: 9, isSelected: false },
];

const defaultTieBreakState: TieBreak[] = [
  { id: 1, selectTieBreak: 'あり', isSelected: false },
  { id: 2, selectTieBreak: 'なし', isSelected: false },
];

export const gameTypeListState = atom<GameType[]>({
  key: 'gameTypeListState',
  default: dfaultGameTypeState,
});

export const gameMatchListState = atom<GameMatch[]>({
  key: 'gameMatchListState',
  default: defaultGameMatchState,
});

export const TieBreakListState = atom<TieBreak[]>({
  key: 'TieBreakListState',
  default: defaultTieBreakState,
});

export const gameTypeIsSelectedState = selector<boolean>({
  key: 'gameTypeIsSelectedState',
  get: ({ get }) => {
    const gameTypeList = get(gameTypeListState);
    const gameTypeIsSelectedList = gameTypeList.map((gameType) => gameType.isSelected);
    return gameTypeIsSelectedList.includes(true);
  },
});

export const gameMatchIsSelectedState = selector<boolean>({
  key: 'gameMatchIsSelectedState',
  get: ({ get }) => {
    const gameMatchList = get(gameMatchListState);
    const gameMatchSelectedList = gameMatchList.map((gameType) => gameType.isSelected);
    return gameMatchSelectedList.includes(true);
  },
});

export const tieBreakSelectedState = selector<boolean>({
  key: 'tieBreakSelectedState',
  get: ({ get }) => {
    const tieBreakList = get(TieBreakListState);
    const tieBreakIsSelectedList = tieBreakList.map((gameType) => gameType.isSelected);
    return tieBreakIsSelectedList.includes(true);
  },
});
