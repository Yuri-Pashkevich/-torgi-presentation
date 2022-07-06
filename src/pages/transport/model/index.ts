import { createEffect, createStore, sample, createEvent } from 'effector'
import type { ObjectData } from 'shared/model'
import { fetchTransport } from 'pages/transport/api'

export const pageMounted = createEvent()

export const getTransportFx = createEffect<void, ObjectData[]>()
getTransportFx.use(fetchTransport)

export const $transport = createStore<ObjectData[]>([])
.on(getTransportFx.doneData, (_, data) => data)

sample({
    clock: pageMounted,
    source: $transport,
    filter: (state) => state.length === 0,
    target: getTransportFx
})