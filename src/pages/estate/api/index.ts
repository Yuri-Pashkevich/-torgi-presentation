import { setState } from 'shared/model'
import { setIsLoaded } from 'shared/model'

export const getEstate = async () => {
    try {
        setIsLoaded(false)
        const res = await fetch('/estate')
        setState('estate', await res.json())
        setIsLoaded(true)
    }
    catch (e) {
        console.log(e)
    }
}