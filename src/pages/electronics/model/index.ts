import { createStore, createEvent, createEffect, sample } from 'effector'
import { fetchData } from 'shared/api'
import type { PageData } from 'shared/model'

export const pageMounted = createEvent<string>()

export const getElectronicsFx = createEffect<string, PageData[]>()
getElectronicsFx.use(fetchData)

export const $electronics = createStore<PageData[]>([])
.on(getElectronicsFx.doneData, (_, data) => data)

const isStoreNotEmpty = $electronics.map(it => it.length === 0)

sample({
    clock: pageMounted,
    filter: isStoreNotEmpty,
    target: getElectronicsFx
})