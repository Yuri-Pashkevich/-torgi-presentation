export const fetchLots = async (lotName: string) => {
    console.log('fetching!')
    try {
        const res = await fetch('/all', {
            method: 'POST',
            body: JSON.stringify({
                name: lotName
            })
        })
        return res.json()
    }
    catch(e) {
        console.log(e)
    }
}