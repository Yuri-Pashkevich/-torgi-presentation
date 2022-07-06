import { Show, onMount } from 'solid-js'
import { Layout } from "shared/ui/layout"
import { BreadCrumbs } from "features/breadcrumbs"
import { NewsList } from "entities/news/ui"
import { Loader } from "shared/ui/loader"
import { useUnit } from 'effector-solid'
import { $news, pageMounted, getNewstFx } from './model'

export const News = () => {

    const [news, mountEvent, loading] = useUnit([$news, pageMounted, getNewstFx.pending])
    const doneData = !loading()
    onMount(() => mountEvent())

    return (
        <Layout.Page>
            <Show when={doneData} fallback={<Loader />}>
                <Layout.Container>
                    <BreadCrumbs />
                    <Layout.Content columns={3} columnWidth="1fr">
                        <NewsList news={news} />
                    </Layout.Content>
                </Layout.Container>
            </Show>
        </Layout.Page>
    )
}