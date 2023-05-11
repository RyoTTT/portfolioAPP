import { atom } from 'recoil';

export type playerType1 = {
    name: string,
    points: number
};

export type playerType2 = {
    name: string,
    points: number
};

export type playerType3 = {
    name: string,
    points: number
};

export type playerType4 = {
    name: string,
    points: number,
};


export const player1 = atom<playerType1>({
    key: 'player1',
    default: {name:"",points:0}
})

export const player2 = atom<playerType2>({
    key: 'player2',
    default: {name:"",points:0}
})

export const player3 = atom<playerType3>({
    key: 'player3',
    default: {name:"",points:0}
})

export const player4 = atom<playerType4>({
    key: 'player4',
    default: {name:"",points:0}
})
