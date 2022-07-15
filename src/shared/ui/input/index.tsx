import styles from './index.module.scss'
import { Accessor, JSX } from 'solid-js'

interface InputProps {
    label?: string
    type?: 'submit' | 'text'
    placeholder?: string
    value?: Accessor<string>
    onChange?: JSX.EventHandlerUnion<HTMLInputElement, Event> | undefined
    onInput?: JSX.EventHandlerUnion<HTMLInputElement, Event> | undefined

}

export const Input = ({label, type, onChange, onInput, placeholder = 'Поиск на площадке', value}: InputProps) => {
    return (
        <input
            type={type}
            class={styles.input}
            value={value && value()}
            placeholder={placeholder}
            onChange={onChange}
            onInput={onInput}
        />
    )
}