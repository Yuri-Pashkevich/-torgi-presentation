import { setState } from 'shared/model'

export const getNews = async () => {
    const res = await fetch('/news')
    setState('news', await res.json())
}