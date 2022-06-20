import { createStore } from 'solid-js/store'

type ObjectData = {
    id: number
    name: string
    requestStart: string
    requestEnd: string
    auctionStart: string
    auctionEnd: string
    address: string
}

type NewsData = {
    id: number
    category: string
    date: string
    name: string
    description: string
}

export interface InitStore {
    all: ObjectData[] | [] 
    property: ObjectData[] | []
    transport: ObjectData[] | []
    equipment: ObjectData[] | []
    furniture: ObjectData[] | []
    electronics: ObjectData[] | []
    building: ObjectData[] | []
    intangible: ObjectData[] | []
    news: NewsData[] | []
}

export const [state, setState] = createStore<InitStore>({
    all: [],
    property: [],
    transport: [],
    equipment: [],
    furniture: [],
    electronics: [],
    building: [],
    intangible: [],
    news: []
})