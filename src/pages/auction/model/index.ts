import { createStore, createEffect, createEvent, sample } from 'effector'
import { ObjectData } from 'shared/model'
import { fetchAuction } from 'pages/auction/api'

export const pageMounted = createEvent<string>()

export const getAuctionFx = createEffect<string, ObjectData>()
getAuctionFx.use(fetchAuction)

const initState = {
    id: 0,
    category: '',
    lot_number: 0,
    initial_price: 0,
    deposit: 0,
    address: '',
    name: '',
    image: '',
    description: '',
    price: 0,
    request_start: '',
    request_end: '',
    auction_start: '',
    auction_end: ''
}

export const $auction = createStore<ObjectData>(initState)
.on(getAuctionFx.doneData, (_, data) => data)

sample({
    clock: pageMounted,
    target: getAuctionFx
})