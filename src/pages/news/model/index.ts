import { createEvent, createEffect, createStore, sample } from 'effector'
import { fetchNews } from 'pages/news/api'

export type News = {
    id: number,
    category: string,
    date: string,
    name: string,
    description: string,
}

export const pageMounted = createEvent()

export const getNewstFx = createEffect<void, News[]>()
getNewstFx.use(fetchNews)

export const $news = createStore<News[]>([])
.on(getNewstFx.doneData, (_, data) => data)

sample({
    clock: pageMounted,
    source: $news,
    filter: (state) => state.length === 0,
    target: getNewstFx
})