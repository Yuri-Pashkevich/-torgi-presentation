import { setState } from 'shared/model'

export const getAuction = async (url : string) => {
    setState('isAuctionLoaded', false)
    const res = await fetch(url)
    setState('auction', await res.json())
    setState('isAuctionLoaded', true)
}