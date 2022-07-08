import { createEvent, createStore, sample, createEffect } from 'effector'
import { fetchData } from 'shared/api'
import type { PageData } from 'shared/model'

export const pageMounted = createEvent<string>()

export const getEquipment = createEffect<string, PageData[]>()
getEquipment.use(fetchData)

export const $equipment = createStore<PageData[]>([])
.on(getEquipment.doneData, (_, data) => data)

const isStoreNotEmpty = $equipment.map(it => it.length === 0)

sample({
    clock: pageMounted,
    filter: isStoreNotEmpty,
    target: getEquipment
})