import { createStore, createEvent } from 'effector'
import type { ObjectData } from 'shared/model'
import { getDataFx, provideStoreToSample } from 'pages/lib/fetchService/model'

export const pageMounted = createEvent<string>()
export const $all = createStore<ObjectData[]>([])
.on(getDataFx.doneData, (_, data) => data)

provideStoreToSample(pageMounted, $all)