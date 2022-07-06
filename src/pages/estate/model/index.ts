import { createEffect, createStore, sample, createEvent } from 'effector'
import type { ObjectData } from 'shared/model'
import { fetchEstate } from 'pages/estate/api'

export const pageMounted = createEvent()

export const getEstateFx = createEffect<void, ObjectData[]>()
getEstateFx.use(fetchEstate)

export const $estate = createStore<ObjectData[]>([])
.on(getEstateFx.doneData, (_, data) => data)

sample({
    clock: pageMounted,
    source: $estate,
    filter: (state) => state.length === 0,
    target: getEstateFx
})