import type { ObjectData } from "shared/model"

export const fetchData = async (url: string) => {
    try {
        const res = await fetch(url)
        return res.json()
    }
    catch(e) {
        console.log(e)
    }
}