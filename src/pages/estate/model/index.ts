import { createStore, createEvent, createEffect, sample } from 'effector'
import { fetchData } from 'shared/api'
import type { PageData } from 'shared/model'

export const pageMounted = createEvent<string>()

export const getEstateFx = createEffect<string, PageData[]>()
getEstateFx.use(fetchData)

export const $estate = createStore<PageData[]>([])
.on(getEstateFx.doneData, (_, data) => data)

const isStoreNotEmpty = $estate.map(it => it.length === 0)

sample({
    clock: pageMounted,
    filter: isStoreNotEmpty,
    target: getEstateFx
})