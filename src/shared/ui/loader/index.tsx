import styles from './index.module.scss'

export const Loader = () => {
    return (
        <div class={styles.loading_spinner}><div class={styles.ldio}>
            <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
        </div></div>
    )
}