import { setState } from 'shared/model'

export const getEstate = async () => {
    const res = await fetch('/estate')
    setState('estate', await res.json())
}