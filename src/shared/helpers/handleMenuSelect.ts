import styles from './index.module.scss'
import { createSignal } from 'solid-js'

export const [path, setPath] = createSignal("/")


export const handleMenuSelect = (e: any, ref: HTMLUListElement | undefined, innerText?: string) => {
    if(innerText) {
        ref?.childNodes.forEach((menuItem: any) => {
            menuItem.classList.remove(styles.active)
            if(innerText === menuItem.innerText) {
                menuItem.classList.add(styles.active)
            }
        })
    } else {
        ref?.childNodes.forEach((menuItem: any) => {
            menuItem.classList.remove(styles.active)
        })
        e.target.classList.add(styles.active)
    }
}

