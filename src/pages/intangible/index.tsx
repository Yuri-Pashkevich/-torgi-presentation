import { Show, onMount } from 'solid-js'
import { LotList } from "entities/lot/ui/lot-list"
import { Layout } from "shared/ui/layout"
import { BreadCrumbs } from "features/breadcrumbs"
import { Loader } from 'shared/ui/loader'
import { $intangible, pageMounted, getIntangibleFx } from './model'
import { withLocation } from 'shared/hocs'
import { useUnit } from 'effector-solid'

export const Intangible = withLocation(() => {

    const [intangible, mountEvent, loading] = useUnit([$intangible, pageMounted, getIntangibleFx.pending])

    onMount(() => mountEvent('/intangible'))

    return (
        <Layout.Page>
            <Show when={!loading()} fallback={<Loader />}>
                <Layout.Container>
                    <BreadCrumbs />
                    <Layout.Content columns={3} columnWidth="1fr">
                        <LotList data={intangible} />
                    </Layout.Content>
                </Layout.Container>
            </Show>
        </Layout.Page>
    )
})