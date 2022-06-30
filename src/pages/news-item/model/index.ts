import { createSignal } from "solid-js"
import { createEvent, createStore, sample } from "effector"
import { getNewsFx } from "../api"


export type News = {
    id: number,
    category: string,
    date: string,
    name: string,
    description: string,
}

export const [news, setNews] = createSignal<News>()


// effector store realization

const initStore = {
    id: 0,
    category: '',
    date: '',
    name: '',
    description: '',
}

const newsItemRoute = createEvent()

export const $news = createStore<News>(initStore).on(getNewsFx.doneData, (_, data) => data)

