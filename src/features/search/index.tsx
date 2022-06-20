import { Input } from "shared/ui/input"
import styles from './index.module.scss'
import { AiOutlineSearch } from 'solid-icons/ai'
 

export const Search = () => {
    return (
        <div class={styles.search}>
            <Input/>
            <div class={styles.icon_wrap}>
                <AiOutlineSearch/>
            </div>
        </div>
    )
}

