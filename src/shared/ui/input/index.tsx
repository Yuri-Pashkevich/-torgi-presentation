import styles from './index.module.scss'
import { JSX } from 'solid-js'

interface InputProps {
    label?: string
    placeholder?: string
    value?: string
    onChange: JSX.EventHandlerUnion<HTMLInputElement, Event> | undefined
}

export const Input = ({label, onChange, placeholder = 'Поиск на площадке', value = ''}: InputProps) => {
    return (
        <input
            class={styles.input}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}