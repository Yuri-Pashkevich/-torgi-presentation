import { Input } from "shared/ui/input"
import styles from './index.module.scss'
import { AiOutlineSearch } from 'solid-icons/ai'
import { $filteredLots, getLotsFx } from './model'
import { useUnit } from "effector-solid"
import { For, Show, Switch, Match } from "solid-js"
import { Link } from "solid-app-router"
import { hideList, hideSearchList, searchValue, $value, showSearchList, $toggleList } from "./model"
import { IoCloseOutline } from 'solid-icons/io'
import { convertDate } from "shared/helpers/convertDate"
import { Loader } from "shared/ui/loader"


export const Search = () => {

    const [value] = useUnit([$value])

    return (
        <div class={styles.search}>
            <Input type='text' value={value} onInput={(e) => { searchValue(e.currentTarget.value); value() && showSearchList() }} />
            <div class={styles.icon_wrap} onClick={() => showSearchList()}>
                <AiOutlineSearch />
            </div>
        </div>
    )
}

export const SearchResults = () => {

    const [filteredLots, loading, show] = useUnit([$filteredLots, getLotsFx.pending, $toggleList])

    return (
        <Show when={show()}> 
            <div class={styles.search_bgc}></div>
            <div class={styles.search_results}>
                <div class={styles.search_wrapper}>
                    <Search />
                    <IoCloseOutline class={styles.search_close} onClick={() => hideSearchList()} />
                </div>
                <Show when={!loading()} fallback={<Loader marginTop="7.5rem"/>}>
                    <Switch>
                        <Match when={filteredLots().length === 0}>
                            <p class={styles.search_noresults}>Нет совпадений по результатам поиска</p>
                        </Match>
                        <Match when={filteredLots().length}>
                            <For each={filteredLots().filter((it, i) => i < 20)}>{({ name, category, image, initial_price, deposit, auction_start, id }) =>
                                <Link class={styles.search_result}
                                    href={`/${category}/${id}`}
                                    onClick={hideList.bind(null, `/${category}/${id}`)}>
                                    <div class={styles.image_container}>
                                        <img src={image} />
                                    </div>
                                    <div class={styles.search_lot}>
                                        <div class={styles.search_title}>{name}</div>
                                        <div class={styles.search_description}>
                                            <div class={styles.search_lot_price}>Начальная цена: <span>{initial_price}</span> <span>руб.</span></div>
                                            <div class={styles.search_lot_price}>Задаток: <span>{deposit}</span> <span>руб.</span></div>
                                            <span class={styles.search_auction_start}>{convertDate(auction_start)}</span>
                                        </div>
                                    </div>
                                </Link>
                            }
                            </For>
                        </Match>
                    </Switch>
                </Show>
            </div>
        </Show>
    )
}