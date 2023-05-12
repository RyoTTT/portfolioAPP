import { atom } from "recoil";

export type playerType1 = {
  id: number;
  name: string;
  points: number;
  seisan: number | null;
};

export type playerType2 = {
  id: number;
  name: string;
  points: number;
  seisan: number | null;
};

export type playerType3 = {
  id: number;
  name: string;
  points: number;
  seisan: number | null;
};

export type playerType4 = {
  id: number;
  name: string;
  points: number;
  seisan: number | null;
};

export const player1 = atom<playerType1>({
  key: "player1",
  default: { id: 1, name: "", points: 0, seisan: null },
});

export const player2 = atom<playerType2>({
  key: "player2",
  default: { id: 2, name: "", points: 0, seisan: null },
});

export const player3 = atom<playerType3>({
  key: "player3",
  default: { id: 3, name: "", points: 0, seisan: null },
});

export const player4 = atom<playerType4>({
  key: "player4",
  default: { id: 4, name: "", points: 0, seisan: null },
});
