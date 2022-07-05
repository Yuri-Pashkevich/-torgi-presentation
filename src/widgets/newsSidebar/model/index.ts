import { createEffect, createStore, sample, createEvent } from "effector"
import type { NewsData } from "shared/model"
import { fetchNews } from "widgets/newsSidebar/api"

export const pageMounted = createEvent()

export const getNewsFx = createEffect<void, NewsData[]>()
getNewsFx.use(fetchNews)

export const $news = createStore<NewsData[]>([])
.on(getNewsFx.doneData, (_, data) => data)

sample({
    clock: pageMounted,
    target: getNewsFx
})