import { Input } from "shared/ui/input"
import styles from './index.module.scss'
import { AiOutlineSearch } from 'solid-icons/ai'
import { $filteredLots } from './model'
import { useUnit } from "effector-solid"
import { For } from "solid-js"
import { Link } from "solid-app-router"
import { $isSearchList, hideList, hideSearchList, searchValue, $value } from "./model" 
import { IoCloseOutline } from 'solid-icons/io'


export const Search = () => {

    const [value] = useUnit([$value])

    return (
        <div class={styles.search}>
            <Input type='text' value={value()} onInput={(e) => searchValue((e.currentTarget.value).toLowerCase())} />
            <div class={styles.icon_wrap}>
                <AiOutlineSearch />
            </div>
        </div>
    )
}

export const SearchResults = () => {

    const [filteredLots, isDataExist] = useUnit([$filteredLots, $isSearchList])

    return (
        <>
            {isDataExist() &&
                <>
                    <div class={styles.search_bgc}></div>
                    <div class={styles.search_results}>
                        <div class={styles.search_wrapper}>
                            <Search/>
                            <IoCloseOutline class={styles.search_close} onClick={() => hideSearchList()}/>
                        </div>
                        <For each={filteredLots().filter((it, i) => i < 20)} fallback={<p>loading...</p>}>{({ name, category, id }) =>
                            <Link class={styles.search_result}
                                href={`/${category}/${id}`}
                                onClick={hideList.bind(null, `/${category}/${id}`)}>
                                {name}
                            </Link>
                        }
                        </For>
                    </div>
                </>
            }
        </>
    )
}