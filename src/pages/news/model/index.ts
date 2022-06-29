import { createSignal } from "solid-js"

export type News = {
    id: number, 
    category: string, 
    date: string, 
    name: string, 
    description: string,
}

export const [news, setNews] = createSignal<News[]>()