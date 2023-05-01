import { atom } from 'recoil';

export type playerType = {
    name: string,
    points: number,
}

export const player = atom<playerType[]>({
    key: 'player',
    default: []
})