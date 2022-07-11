import { createStore, createEvent, createEffect, sample } from 'effector'
import { fetchData } from 'shared/api'
import type { PageData } from 'shared/model'

export const pageMounted = createEvent<string>()

export const getBuildingFx = createEffect<string, PageData[]>()
getBuildingFx.use(fetchData)

export const $building = createStore<PageData[]>([])
.on(getBuildingFx.doneData, (_, data) => data)

const isStoreNotEmpty = $building.map(it => it.length === 0)

sample({
    clock: pageMounted,
    filter: isStoreNotEmpty,
    target: getBuildingFx
})