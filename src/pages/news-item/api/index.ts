export const fetchNews = async (id: string) => {
    try {
        const res = await fetch(`/news/${id}`)
        return res.json()
    }
    catch(e) {
        console.log(e)
    }
}