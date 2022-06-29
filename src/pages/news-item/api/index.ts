import { setNews } from "pages/news-item/model"
import { setIsLoaded } from "shared/model"

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