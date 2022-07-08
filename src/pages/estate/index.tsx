import { Show, onMount } from 'solid-js'
import { LotList } from "entities/lot/ui/lot-list"
import { Layout } from "shared/ui/layout"
import { BreadCrumbs } from "features/breadcrumbs"
import { Loader } from 'shared/ui/loader'
import { $estate, pageMounted, getEstateFx } from './model'
import { withLocation } from 'shared/hocs'
import { useUnit } from 'effector-solid'

export const Estate = withLocation(() => {

    const [estate, mountEvent, loading] = useUnit([$estate, pageMounted, getEstateFx.pending])

    onMount(() => mountEvent('/estate'))

    return (
        <Layout.Page>
            <Show when={!loading()} fallback={<Loader />}>
                <Layout.Container>
                    <BreadCrumbs />
                    <Layout.Content columns={3} columnWidth="1fr">
                        <LotList data={estate} />
                    </Layout.Content>
                </Layout.Container>
            </Show>
        </Layout.Page>
    )
})