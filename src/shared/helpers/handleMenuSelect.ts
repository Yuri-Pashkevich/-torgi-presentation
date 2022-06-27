import styles from './index.module.scss'
import { createSignal } from 'solid-js'

export const [path, setPath] = createSignal("/")


export const handleMenuSelect = (e: any, ref: HTMLUListElement | undefined) => {
    ref?.childNodes.forEach((menuItem: any) => {
        menuItem.classList.remove(styles.active)
    })
    e.target.classList.add(styles.active)
}