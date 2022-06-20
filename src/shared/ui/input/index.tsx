import { JSXElement } from 'solid-js'
import styles from './index.module.scss'

interface InputProps {
    label?: string
    placeholder?: string
    value?: string
}

export const Input = ({label, placeholder = 'Поиск на площадке', value = ''}: InputProps) => {
    return (
        <input
            class={styles.input}
            value={value}
            placeholder={placeholder}
        />
    )
}