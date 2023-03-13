import { atom } from 'recoil';

export const gameTypeState = atom<'シングルス' | 'ダブルス' | null>({
  key: 'gameTypeState',
  default: null,
});

export const gameMatchState = atom<5 | 7 | 9 | null>({
  key: 'gameMatchListState',
  default: null,
});

export const tieBreakState = atom<'あり' | 'なし' | null>({
  key: 'TieBreakListState',
  default: null,
});
