import { setNews } from "pages/news/model"
import { setIsLoaded } from "shared/model"

export const getNews = async () => {
    try {
        setIsLoaded(false)
        const res = await fetch('/news')
        setNews(await res.json())
        setIsLoaded(true)
    } 
    catch (e) {
        console.log(e)
    }
}