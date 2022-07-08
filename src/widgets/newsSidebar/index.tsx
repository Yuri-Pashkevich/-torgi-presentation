import { convertDate } from "shared/helpers/convertDate"
import styles from "./index.module.scss"
import { For, onMount } from "solid-js"
import { Link } from 'solid-app-router'
import { getNewsFx, $news, pageMounted } from "./model"
import { useUnit } from "effector-solid"
import { Loader } from "shared/ui/loader"

export const NewsSidebar = () => {

    const [news, mountEvent, loading] = useUnit([$news, pageMounted, getNewsFx.pending])

    onMount(() => mountEvent('/news')) 

    return (
        <aside class={styles.sidebar}>
            <div class={styles.overflow_mask} />
            <div class={styles.sidebar_title}>
                Лента новостей
            </div>
            <For each={news()} fallback={<Loader/>}>{({date, name, id}) =>
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