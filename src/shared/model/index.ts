export type PageData = {
    id: number
    category: string
    lot_number: number
    initial_price: number
    deposit: number
    address: string
    name: string
    image: string
    description: string
    price: number
    request_start: string
    request_end: string
    auction_start: string
    auction_end: string
}

export type NewsData = {
    id: number
    category: string
    date: string
    name: string
    description: string
}

export type EquipmentData = PageData
export type EstateData = PageData
export type MainData = PageData
export type TransportData = PageData
