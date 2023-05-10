import { atom } from 'recoil';

export type playerType1 = {
    points: number,
}
export type playerType2 = {
    points: number,
}
export type playerType3 = {
    points: number,
}
export type playerType4 = {
    points: number,
}

export const player1 = atom<playerType1[]>({
    key: 'player1',
    default: []
})

export const name1Atom = atom<string>({
    key: 'name1',
    default:""
})
export const player2 = atom<playerType2[]>({
    key: 'player2',
    default: []
})

export const name2Atom = atom<string>({
    key: 'name2',
    default:""
})
export const player3 = atom<playerType3[]>({
    key: 'player3',
    default: []
})

export const name3Atom = atom<string>({
    key: 'name3',
    default:""
})
export const player4 = atom<playerType4[]>({
    key: 'player4',
    default: []
})

export const name4Atom = atom<string>({
    key: 'name4',
    default:""
})