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

export interface InitStore {
    property: ObjectData[] | []
    transport: ObjectData[] | []
    equipment: ObjectData[] | []
    furniture: ObjectData[] | []
    electronics: ObjectData[] | []
    building: ObjectData[] | []
    intangible: ObjectData[] | []
}

export const [state, setState] = createStore<InitStore>({
    property: [],
    transport: [],
    equipment: [],
    furniture: [],
    electronics: [],
    building: [],
    intangible: []
})