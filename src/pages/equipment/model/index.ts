import { createEvent, createStore } from 'effector'
import type { EquipmentData } from 'shared/model'
import { provideStoreToSample, getDataFx } from 'pages/lib/fetchService/model'

export const pageMounted = createEvent<string>()
export const $equipment = createStore<EquipmentData[]>([])
.on(getDataFx.doneData, (_, data) => data)

provideStoreToSample(pageMounted, $equipment)