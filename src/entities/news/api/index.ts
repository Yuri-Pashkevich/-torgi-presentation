import { setNews } from "entities/news/model";

export const getNews = async () => {
    const res = await fetch('/news')
    setNews(await res.json())
}