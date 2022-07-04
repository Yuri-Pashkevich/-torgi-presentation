import { createEffect, createStore, sample, createEvent } from 'effector'
import type { ObjectData } from 'shared/model'
import { fetchEquipment } from 'pages/equipment/api'

export const pageMounted = createEvent()

export const getEquipmentFx = createEffect<void, ObjectData[]>()
getEquipmentFx.use(fetchEquipment)

export const $equipment = createStore<ObjectData[]>([])
.on(getEquipmentFx.doneData, (_, data) => data)

sample({
    clock: pageMounted,
    target: getEquipmentFx
})