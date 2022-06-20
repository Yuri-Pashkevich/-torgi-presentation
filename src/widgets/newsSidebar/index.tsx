import { dateConverter } from "shared/helpers/dateConverter"
import styles from "./index.module.scss"
import { For, onMount } from "solid-js"
import { state } from 'shared/model'
import { getNews } from 'widgets/newsSidebar/api'

export const NewsSidebar = () => {

    onMount(() => {
        getNews()
    })

    return (
        <aside class={styles.sidebar}>
            <div class={styles.overflow_mask} />
            <div class={styles.sidebar_title}>
                Лента новостей
            </div>
            <For each={state.news} fallback={<p>Loading...</p>}>{({date, name}) =>
                <SidebarItem date={date} name={name} />
            }
            </For>
        </aside>
    )
}

const SidebarItem = ({ date, name }: SideBarNewsItem & SideBarDate) => {
    return (
        <>
            <SidebarDate date={date}/>
            <SidebarNews name={name} />
        </>
    )
}

interface SideBarNewsItem {
    name: string
}

const SidebarNews = ({ name }: SideBarNewsItem) => {
    return <div class={styles.sidebar_news}>
        {name}
    </div>
}

interface SideBarDate {
    date: string
}

const SidebarDate = ({ date }: SideBarDate) => {
    return <div class={styles.sidebar_date}>{dateConverter(date)}</div>
}

