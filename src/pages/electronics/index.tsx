import { Show, onMount } from 'solid-js'
import { LotList } from "entities/lot/ui/lot-list"
import { Layout } from "shared/ui/layout"
import { BreadCrumbs } from "features/breadcrumbs"
import { Loader } from 'shared/ui/loader'
import { $electronics, pageMounted, getElectronicsFx } from './model'
import { withLocation } from 'shared/hocs'
import { useUnit } from 'effector-solid'

export const Electronics = withLocation(() => {

    const [electronics, mountEvent, loading] = useUnit([$electronics, pageMounted, getElectronicsFx.pending])

    onMount(() => mountEvent('/electronics'))

    return (
        <Layout.Page>
            <Show when={!loading()} fallback={<Loader />}>
                <Layout.Container>
                    <BreadCrumbs />
                    <Layout.Content columns={3} columnWidth="1fr">
                        <LotList data={electronics} />
                    </Layout.Content>
                </Layout.Container>
            </Show>
        </Layout.Page>
    )
})