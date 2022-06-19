import styles from './index.module.scss'
import { dateConverter } from 'shared/helpers/dateConverter'

interface LotProps {
    name: string
    requestStart: string
    requestEnd: string
}

export const Lot = ({ name, requestStart, requestEnd }: LotProps) => {
    return (
        <div class={styles.lot}>
            <div>{name}</div>
            <div>{dateConverter(requestStart)}</div>
            <div>{dateConverter(requestEnd)}</div>
        </div>
    )
}

