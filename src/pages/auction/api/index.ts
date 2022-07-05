export const fetchAuction = async (url: string) => {
    try {
        const res = await fetch(url)
        return res.json()
    }
    catch(e) {
        console.log(e)
    }
}