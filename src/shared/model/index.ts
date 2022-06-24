import { createStore } from 'solid-js/store'

export type ObjectData = {
    id: number
    category: string
    lot_number: number
    initial_price: number
    deposit: number
    address: string
    name: string
    image: string
    description: string
    price: number
    request_start: string
    request_end: string
    auction_start: string
    auction_end: string
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
    estate: ObjectData[] | []
    transport: ObjectData[] | []
    equipment: ObjectData[] | []
    furniture: ObjectData[] | []
    electronics: ObjectData[] | []
    building: ObjectData[] | []
    intangible: ObjectData[] | []
    news: NewsData[] | []
    auction: ObjectData | null
    isAuctionLoaded: boolean
}

export const [state, setState] = createStore<InitStore>({
    all: [],
    estate: [],
    transport: [],
    equipment: [],
    furniture: [],
    electronics: [],
    building: [],
    intangible: [],
    news: [],
    auction: null,
    isAuctionLoaded: false
})



