import { Show, onMount } from 'solid-js'
import { Layout } from "shared/ui/layout"
import { BreadCrumbs } from 'features/breadcrumbs'
import { useLocation } from "solid-app-router"
import styles from './index.module.scss'
import { setPath } from 'shared/helpers/handleMenuSelect'
import { getNews } from './api'
import { news } from './model'
import { convertDate } from 'shared/helpers/convertDate'

export const NewsItem = () => {

    const { pathname } = useLocation()

    onMount(() => getNews(pathname))

    const path = pathname.split('/')[1]
    setPath(`/${path}`)

    return (
        <Layout.Page>
            <BreadCrumbs />
            <Show when={news()} fallback={<p>...loading</p>}>
                <div class={styles.news}>
                    <div class={styles.news_category}>{news()?.category}</div>
                    <h2 class={styles.news_title}>{news()?.name}</h2>
                    <div class={styles.news_description}>{news()?.description}</div>
                    <div class={styles.news_date}>{convertDate(news()?.date)}</div>
                </div>
            </Show>
        </Layout.Page>
    )
}