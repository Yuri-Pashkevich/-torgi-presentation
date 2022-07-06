import { createEffect, createStore, createEvent, sample } from 'effector'
import type { EquipmentData } from 'shared/model'
import { fetchEquipment } from 'pages/equipment/api'

export const pageMounted = createEvent()

export const getEquipmentFx = createEffect<void, EquipmentData[]>()
getEquipmentFx.use(fetchEquipment)

export const $equipment = createStore<EquipmentData[]>([])
.on(getEquipmentFx.doneData, (_, data) => data)

sample({
    clock: pageMounted,
    source: $equipment,
    filter: (state) => state.length === 0,
    target: getEquipmentFx
})