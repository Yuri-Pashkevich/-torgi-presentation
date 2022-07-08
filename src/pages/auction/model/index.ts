import { createStore, createEffect, createEvent, sample } from 'effector'
import { PageData } from 'shared/model'
import { fetchData } from 'shared/api'

export const pageMounted = createEvent<string>()

export const getAuctionFx = createEffect<string, PageData>()
getAuctionFx.use(fetchData)

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

export const $auction = createStore<PageData>(initState)
.on(getAuctionFx.doneData, (_, data) => data)


sample({
    clock: pageMounted,
    source: $auction,
    filter: (state, clockData) => state.id !== +clockData,
    fn: (_, clockData) => clockData,
    target: getAuctionFx
})