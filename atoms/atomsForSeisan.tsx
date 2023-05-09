import { atom } from 'recoil';

export type playerType = {
    points: number,
}

export const player1 = atom<playerType[]>({
    key: 'player1',
    default: []
})

export const name1Atom = atom<string>({
    key: 'name1',
    default:""
})
export const player2 = atom<playerType[]>({
    key: 'player2',
    default: []
})

export const name2Atom = atom<string>({
    key: 'name2',
    default:""
})
export const player3 = atom<playerType[]>({
    key: 'player3',
    default: []
})

export const name3Atom = atom<string>({
    key: 'name3',
    default:""
})
export const player4 = atom<playerType[]>({
    key: 'player4',
    default: []
})

export const name4Atom = atom<string>({
    key: 'name4',
    default:""
})