import { createEvent, createStore, sample, createEffect } from "effector"
import { fetchNewsItem } from "shared/api"
import type { NewsData } from "shared/model"


const initStore = {
    id: 0,
    category: '',
    date: '',
    name: '',
    description: '',
}

export const pageMounted = createEvent<string>()

export const getNewsFx = createEffect<string, NewsData>()
getNewsFx.use(fetchNewsItem)

export const $news = createStore<NewsData>(initStore)
.on(getNewsFx.doneData, (_, data) => data)


sample({
    clock: pageMounted,
    source: $news,
    filter: (state, clockData) => state.id !== +clockData,
    fn: (_, clockData) => clockData,
    target: getNewsFx,
})