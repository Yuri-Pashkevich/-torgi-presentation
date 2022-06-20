import { setState } from 'shared/model'

export const getAuction = async (url : string) => {
    const res = await fetch(url)
    setState('auction', await res.json())
}