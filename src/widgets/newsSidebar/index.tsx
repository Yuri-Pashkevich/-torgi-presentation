import { dateConverter } from "shared/helpers/dateConverter"
import styles from "./index.module.scss"

export const NewsSidebar = () => {
  return (
    <aside class={styles.sidebar}>
        <div class={styles.overflow_mask}/>
        <div class={styles.sidebar_title}>
            Лента новостей
        </div>
        <SidebarItem/>
        <SidebarItem/>
        <SidebarItem/>
        <SidebarItem/>
        <SidebarItem/>
        <SidebarItem/>

    </aside>
  )
}

const SidebarItem = () => {
    return (
        <>
            <SidebarDate/>
            <SidebarNews/>
        </>
    )
}

const SidebarNews = () => {
    return <div class={styles.sidebar_news}>
        МИПК и ПК БНТУ объявляет набор слушателей в группу по подготовке временных (антикризисных) управляющих с 22.08.2022
    </div>
}

const SidebarDate = () => {

    const date = '2022-06-17T12:50:01.135Z'

    return <div class={styles.sidebar_date}>{dateConverter(date)}</div>
}

