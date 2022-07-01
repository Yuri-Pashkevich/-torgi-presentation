import { Show, onMount } from 'solid-js'
import { Layout } from "shared/ui/layout"
import { BreadCrumbs } from 'features/breadcrumbs'
import { useLocation, useParams } from "solid-app-router"
import styles from './index.module.scss'
import { setPath } from 'shared/helpers/handleMenuSelect'
import { Loader } from 'shared/ui/loader'
import { convertDate } from 'shared/helpers/convertDate'
import { useUnit } from 'effector-solid/scope'
import { getNewsFx } from './api'
import { $news } from './model'
import { pageMounted } from './model'


export const NewsItem = () => {

    const [news, loading, handlePageMounted] = useUnit([$news, getNewsFx.pending, pageMounted])
    
    const { id } = useParams()
    
    const { pathname } = useLocation()
        
    const path = pathname.split('/')[1]
    setPath(`/${path}`)
    
    onMount(() => handlePageMounted(id)) 

    return (
        <Layout.Page>
            <Layout.Container>
                <Show when={!loading()} fallback={<Loader/>}>
                    <BreadCrumbs />
                    <div class={styles.news}>
                        <div class={styles.news_category}>{news().category}</div>
                        <h2 class={styles.news_title}>{news().name}</h2>
                        <div class={styles.news_description}>{news().description}</div>
                        <div class={styles.news_date}>{convertDate(news().date)}</div>
                    </div>
                </Show>
            </Layout.Container>
        </Layout.Page>
    )
}

