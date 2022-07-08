import { Show, onMount } from 'solid-js'
import { LotList } from "entities/lot/ui/lot-list"
import { Layout } from "shared/ui/layout"
import { BreadCrumbs } from "features/breadcrumbs"
import { Loader } from 'shared/ui/loader'
import { $transport, pageMounted, getTransportFx } from './model'
import { useUnit } from 'effector-solid'
import { withLocation } from 'shared/hocs'

export const Transport = withLocation(() => {

    const [transport, mountEvent, loading] = useUnit([$transport, pageMounted, getTransportFx.pending])

    onMount(() => mountEvent('/transport'))

    return (
        <Layout.Page>
            <Show when={!loading()} fallback={<Loader />}>
                <Layout.Container>
                    <BreadCrumbs />
                    <Layout.Content columns={3} columnWidth="1fr">
                        <LotList data={transport} />
                    </Layout.Content>
                </Layout.Container>
            </Show>
        </Layout.Page>
    )
})