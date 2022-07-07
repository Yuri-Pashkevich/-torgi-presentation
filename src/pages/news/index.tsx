import { Show, onMount } from 'solid-js'
import { Layout } from "shared/ui/layout"
import { BreadCrumbs } from "features/breadcrumbs"
import { NewsList } from "entities/news/ui"
import { Loader } from "shared/ui/loader"
import { useUnit } from 'effector-solid'
import { pageMounted, getDataFx } from 'pages/lib/fetchService/model'
import { $news } from './model'
import { withLocation } from 'shared/hocs'

export const News = withLocation(() => {

    const [news, mountEvent, loading] = useUnit([$news, pageMounted, getDataFx.pending])
    onMount(() => mountEvent('/news'))

    return (
        <Layout.Page>
            <Show when={!loading()} fallback={<Loader />}>
                <Layout.Container>
                    <BreadCrumbs />
                    <Layout.Content columns={3} columnWidth="1fr">
                        <NewsList news={news} />
                    </Layout.Content>
                </Layout.Container>
            </Show>
        </Layout.Page>
    )
})