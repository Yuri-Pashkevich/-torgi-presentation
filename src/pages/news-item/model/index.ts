import { createEvent, createStore, sample, createEffect } from "effector"
import { fetchNews } from "pages/news-item/api"

export type News = {
    id: number,
    category: string,
    date: string,
    name: string,
    description: string,
}


// effector store realization

const initStore = {
    id: 0,
    category: '',
    date: '',
    name: '',
    description: '',
}

export const pageMounted = createEvent<string>()

export const getNewsFx = createEffect<string, News>()
getNewsFx.use(fetchNews)

export const $news = createStore<News>(initStore)
.on(getNewsFx.doneData, (_, data) => data)

sample({
    clock: pageMounted,
    source: $news,
    filter: (state, clockData) => state.id !== +clockData,
    fn: (_, clockData) => clockData,
    target: getNewsFx,
})
