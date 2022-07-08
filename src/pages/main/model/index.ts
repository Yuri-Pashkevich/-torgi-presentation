import { createStore, createEvent, createEffect, sample } from 'effector'
import { fetchData } from 'shared/api'
import type { PageData } from 'shared/model'

export const pageMounted = createEvent<string>()

export const getAllFx = createEffect<string, PageData[]>()
getAllFx.use(fetchData)

export const $all = createStore<PageData[]>([])
.on(getAllFx.doneData, (_, data) => data)

const isStoreNotEmpty = $all.map(it => it.length === 0)

sample({
    clock: pageMounted,
    filter: isStoreNotEmpty,
    target: getAllFx
})