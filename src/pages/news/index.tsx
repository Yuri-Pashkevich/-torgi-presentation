import { Show, onMount } from 'solid-js'
import { Layout } from "shared/ui/layout"
import { BreadCrumbs } from "features/breadcrumbs"
import { NewsList } from "entities/news/ui"
import { Loader } from "shared/ui/loader"
import { isLoaded } from 'shared/model'
import { getNews } from './api'
import { news } from './model'

export const News = () => {

    onMount(() => getNews())

    return (
        <Layout.Page>
            <Layout.Container>
                <Show when={isLoaded()} fallback={<Loader />}>
                    <BreadCrumbs />
                    <Layout.Content columns={3} columnWidth="1fr">
                        <NewsList news={news}/>
                    </Layout.Content>
                </Show>
            </Layout.Container>
        </Layout.Page>
    )
}