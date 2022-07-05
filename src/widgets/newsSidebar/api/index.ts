export const fetchNews = async () => {
    const res = await fetch('/news')
    return res.json()
}