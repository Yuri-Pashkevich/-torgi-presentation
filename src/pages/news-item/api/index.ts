import { createEffect } from "effector"
import type { News } from 'pages/news-item/model'

const fetchNews = async (id: string) => {
    try {
        const res = await fetch(`/news/${id}`)
        return res.json()
    }
    catch(e) {
        console.log(e)
    }
}

export const getNewsFx = createEffect<string, News>()
getNewsFx.use(fetchNews)