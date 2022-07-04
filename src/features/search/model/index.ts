import { createEffect, createStore, sample, createEvent } from 'effector'
import type { ObjectData } from 'shared/model'
import { fetchLots } from 'features/search/api'

export const searchValue = createEvent<string>('')

export const getLotsFx = createEffect<string, ObjectData[]>()
getLotsFx.use(fetchLots)

export const $filteredLots = createStore<ObjectData[]>([])
.on(getLotsFx.doneData, (_, data) => data)

sample({
    clock: searchValue,
    target: getLotsFx
})