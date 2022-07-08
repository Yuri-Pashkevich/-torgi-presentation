import { createEffect, createStore, sample, createEvent } from "effector"
import type { NewsData } from "shared/model"
import { fetchData } from "shared/api"

export const pageMounted = createEvent<string>()

export const getNewsFx = createEffect<string, NewsData[]>()
getNewsFx.use(fetchData)

export const $news = createStore<NewsData[]>([])
.on(getNewsFx.doneData, (_, data) => data)

const isStoreNotEmpty = $news.map(it => it.length === 0)

sample({
    clock: pageMounted,
    filter: isStoreNotEmpty,
    target: getNewsFx
})