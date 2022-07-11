import { createStore, createEvent, createEffect, sample } from 'effector'
import { fetchData } from 'shared/api'
import type { PageData } from 'shared/model'

export const pageMounted = createEvent<string>()

export const getIntangibleFx = createEffect<string, PageData[]>()
getIntangibleFx.use(fetchData)

export const $intangible = createStore<PageData[]>([])
.on(getIntangibleFx.doneData, (_, data) => data)

const isStoreNotEmpty = $intangible.map(it => it.length === 0)

sample({
    clock: pageMounted,
    filter: isStoreNotEmpty,
    target: getIntangibleFx
})