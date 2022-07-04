export const fetchNews = async () => {
    try {
        const res = await fetch('/news')
        return res.json()
    } 
    catch (e) {
        console.log(e)
    }
}