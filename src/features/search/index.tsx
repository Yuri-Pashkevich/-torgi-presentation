import { Input } from "shared/ui/input"
import styles from './index.module.scss'
import { AiOutlineSearch } from 'solid-icons/ai'
import { $filteredLots, getLotsFx, searchValue } from './model'
import { useUnit } from "effector-solid"
import { LotList } from "entities/lot/ui/lot-list"
import { Layout } from "shared/ui/layout"
import { createSignal, For } from "solid-js"
import { Link } from "solid-app-router"
import { $isSearchList, hideSearchList } from "./model"


export const Search = () => {

    const [value] = useUnit([searchValue])

    return (
        <div class={styles.search}>
            <Input onChange={(e: any) => value((e.currentTarget.value).toLowerCase())} />
            <div class={styles.icon_wrap}>
                <AiOutlineSearch />
            </div>
        </div>
    )
}

export const SearchResults = () => {

    const [filteredLots, isDataExist, hideList] = useUnit([$filteredLots, $isSearchList, hideSearchList])

    return (
        <>
            {isDataExist() && <div class={styles.search_results}>
                <For each={filteredLots()} fallback={<p>loading...</p>}>{({ name, category, id }) =>
                    <Link class={styles.search_result} href={`/${category}/${id}`} onClick={() => hideList()}>{name}</Link>
                }
                </For>

            </div>}
        </>
    )
}