export const fetchTransport = async () => {
    try {
        const res = await fetch('/transport')
        return res.json()
    }
    catch (e) {
        console.log(e)
    }
}