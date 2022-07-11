import { createEffect, createStore, sample, createEvent } from 'effector'
import type { PageData } from 'shared/model'
import { fetchLots } from 'features/search/api'

export const searchValue = createEvent<string>()

searchValue.watch((value) => console.log(value))

export const getLotsFx = createEffect<string, PageData[]>()
getLotsFx.use(fetchLots)

export const $filteredLots = createStore<PageData[]>([])
.on(getLotsFx.doneData, (_, data) => data)

export const hideSearchList = createEvent()

export const $isSearchList = createStore(false)
.on(getLotsFx.doneData, () => true)
.on(hideSearchList, () => false)

$isSearchList.watch((store) => console.log(store))

sample({
    clock: searchValue,
    target: getLotsFx
})