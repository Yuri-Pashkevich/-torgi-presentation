import { setNews } from "pages/news-item/model"
import { setIsLoaded } from "shared/model"
import { createEffect } from "effector"

export const getNews = async (url : string) => {
    try {
        setIsLoaded(false)
        const res = await fetch(url)
        setNews(await res.json())
        setIsLoaded(true)
    }
    catch(e) {
        console.log(e)
    }
}

// effector api realization

export const getNewsFx = createEffect(async (url: string) => {
    try {
        const res = await fetch(url)
        return res.json()
    }
    catch(e) {
        console.log(e)
    }
})