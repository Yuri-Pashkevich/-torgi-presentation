import { createEffect, createStore, sample, createEvent } from 'effector'
import type { ObjectData } from 'shared/model'
import { fetchAll } from 'pages/main/api'

export const pageMounted = createEvent()

export const getAllFx = createEffect<void, ObjectData[]>()
getAllFx.use(fetchAll)

export const $all = createStore<ObjectData[]>([])
.on(getAllFx.doneData, (_, data) => data)

sample({
    clock: pageMounted,
    target: getAllFx
})