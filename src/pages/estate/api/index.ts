export const fetchEstate = async () => {
    try {
        const res = await fetch('/estate')
        return res.json()
    }
    catch (e) {
        console.log(e)
    }
}