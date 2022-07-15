export const fetchLots = async (lotName: string) => {
    try {
        const res = await fetch('/all', {
            method: 'POST',
            body: JSON.stringify({
                lotName: lotName
            })
        })
        return res.json()
    }
    catch(e) {
        console.log(e)
    }
}