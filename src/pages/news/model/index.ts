import { createEvent, createStore } from 'effector'
import { getDataFx, provideStoreToSample } from 'pages/lib/fetchService/model'
import type { NewsData } from 'shared/model'

export const pageMounted = createEvent<string>()
export const $news = createStore<NewsData[]>([])
.on(getDataFx.doneData, (_, data) => data)

provideStoreToSample(pageMounted, $news)