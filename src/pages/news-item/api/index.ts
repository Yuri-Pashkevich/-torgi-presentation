import { setNews } from "pages/news-item/model"

export const getNews = async (url : string) => {
    setNews(null)
    const res = await fetch(url)
    setNews(await res.json())
}