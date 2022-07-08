import { createStore, createEvent, createEffect, sample } from 'effector'
import { fetchData } from 'shared/api'
import type { TransportData } from 'shared/model'

export const pageMounted = createEvent<string>()

export const getTransportFx = createEffect<string, TransportData[]>()
getTransportFx.use(fetchData)

export const $transport = createStore<TransportData[]>([])
.on(getTransportFx.doneData, (_, data) => data)

const isStoreNotEmpty = $transport.map(it => it.length === 0)

sample({
    clock: pageMounted,
    filter: isStoreNotEmpty,
    target: getTransportFx
})