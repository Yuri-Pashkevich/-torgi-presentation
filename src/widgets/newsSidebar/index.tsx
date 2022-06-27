import { convertDate } from "shared/helpers/convertDate"
import styles from "./index.module.scss"
import { For } from "solid-js"
import { state } from 'shared/model'
import { getNews } from 'widgets/newsSidebar/api'
import { Link } from 'solid-app-router'

export const NewsSidebar = () => {

    getNews()

    return (
        <aside class={styles.sidebar}>
            <div class={styles.overflow_mask} />
            <div class={styles.sidebar_title}>
                Лента новостей
            </div>
            <For each={state.news} fallback={<p>Loading...</p>}>{({date, name, id}) =>
                <SidebarItem date={date} name={name} id={id}/>
            }
            </For>
        </aside>
    )
}

interface SidebarItemProps extends SideBarNewsItem {
    id: number
}

const SidebarItem = ({ date, name, id }: SidebarItemProps & SideBarDate) => {
    return (
        <Link href={`/news/${id}`}>
            <SidebarDate date={date}/>
            <SidebarNews name={name} />
        </Link>
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
    return <div class={styles.sidebar_date}>{convertDate(date)}</div>
}