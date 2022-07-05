import { Input } from "shared/ui/input"
import styles from './index.module.scss'
import { AiOutlineSearch } from 'solid-icons/ai'
import { $filteredLots, searchValue, getLotsFx } from './model'
import { useUnit } from "effector-solid"
 

export const Search = () => {

    const [filteredLots, value, loading] = useUnit([$filteredLots, searchValue, getLotsFx])

    console.log(filteredLots())

    return (
        <div class={styles.search}>
            <Input onChange={(e: any) => value((e.target.value).toLowerCase())}/>
            <div class={styles.icon_wrap}>
                <AiOutlineSearch/>
            </div>
        </div>
    )
}

