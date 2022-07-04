export const fetchAll = async () => {
    try {
        const res = await fetch('/all')
        return res.json()
    }
    catch(e) {
        console.log(e)
    }
}