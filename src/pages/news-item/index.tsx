import { Show, onMount } from 'solid-js'
import { Layout } from "shared/ui/layout"
import { BreadCrumbs } from 'features/breadcrumbs'
import { useParams } from "solid-app-router"
import styles from './index.module.scss'
import { Loader } from 'shared/ui/loader'
import { convertDate } from 'shared/helpers/convertDate'
import { useUnit } from 'effector-solid/scope'
import { $news, getNewsFx, pageMounted } from './model'
import { withLocation } from 'shared/hocs'


export const NewsItem = withLocation(() => {

    const [news, mountEvent, loading] = useUnit([$news, pageMounted, getNewsFx.pending])

    const { id } = useParams()
    
    onMount(() => mountEvent(id))
    
    return (
        <Layout.Page>
            <Show when={!loading()} fallback={<Loader />}>
                <Layout.Container>
                    <BreadCrumbs />
                    <div class={styles.news}>
                        <div class={styles.news_category}>{news().category}</div>
                        <h2 class={styles.news_title}>{news().name}</h2>
                        <div class={styles.news_description}>{news().description}</div>
                        <div class={styles.news_date}>{convertDate(news().date)}</div>
                    </div>
                </Layout.Container>
            </Show>
        </Layout.Page>
    )
})