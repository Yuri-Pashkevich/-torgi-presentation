import { createStore, createEvent, createEffect, sample } from 'effector'
import { fetchData } from 'shared/api'
import type { PageData } from 'shared/model'

export const pageMounted = createEvent<string>()

export const getFurnitureFx = createEffect<string, PageData[]>()
getFurnitureFx.use(fetchData)

export const $furniture = createStore<PageData[]>([])
.on(getFurnitureFx.doneData, (_, data) => data)

const isStoreNotEmpty = $furniture.map(it => it.length === 0)

sample({
    clock: pageMounted,
    filter: isStoreNotEmpty,
    target: getFurnitureFx
})