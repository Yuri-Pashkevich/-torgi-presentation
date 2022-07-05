import styles from './index.module.scss'
import { convertDate } from 'shared/helpers/convertDate'
import { Link } from 'solid-app-router'
import { ObjectData } from 'shared/model'

interface LotProps extends ObjectData {}

export const Lot = ({ id, category, lot_number, initial_price, deposit, address, name, image, description, price, request_start, request_end, auction_start, auction_end }: LotProps) => {

    return (
        <Link href={`/${category}/${id}`} class={styles.lot}>
            <div class={styles.image_box}>
                <img src={image} alt="img" />
            </div>
            <ul class={styles.text_box}>
                <li>Лот №{lot_number}</li>
                <li>{name}</li>
                <li>Прием заявок с {convertDate(request_start)}</li>
                <li>Текущая цена: {initial_price} бел. руб.</li>
            </ul>
        </Link>
    )
}