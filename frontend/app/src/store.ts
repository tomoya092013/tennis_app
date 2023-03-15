import { atom } from 'recoil';
import { Player } from './type';

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

export const PlayerListState = atom<Player[]>({
  key: 'PlayerListState',
  default: [],
});

export const enableAddServeState = atom<boolean>({
  key: 'enableAddServeState',
  default: true,
});

export const enableAddShotState = atom<boolean>({
  key: 'enableAddShotState',
  default: false,
});

export const modalShowState = atom<boolean>({
  key: 'modalShowState',
  default: false,
});
