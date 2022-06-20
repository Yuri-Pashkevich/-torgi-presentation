import styles from './index.module.scss'
import { dateConverter } from 'shared/helpers/dateConverter'
import { Link } from 'solid-app-router'

interface LotProps {
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

export const Lot = ({ id, category, lot_number, initial_price, deposit, address, name, image, description, price, request_start, request_end, auction_start, auction_end }: LotProps) => {
    return (
        <Link href={`/${category}/${id}`} class={styles.lot}>
            <div class={styles.image_box}>
                <img src={image} alt="img" />
            </div>
            <ul class={styles.text_box}>
                <li>Лот №{lot_number}</li>
                <li>{name}</li>
                <li>Прием заявок с {dateConverter(request_start)}</li>
                <li>Текущая цена: {initial_price} бел. руб.</li>
            </ul>
        </Link>
    )
}


