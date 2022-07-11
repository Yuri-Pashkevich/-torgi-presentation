import { Show, onMount } from 'solid-js'
import { LotList } from "entities/lot/ui/lot-list"
import { Layout } from "shared/ui/layout"
import { BreadCrumbs } from "features/breadcrumbs"
import { Loader } from 'shared/ui/loader'
import { $building, pageMounted, getBuildingFx } from './model'
import { withLocation } from 'shared/hocs'
import { useUnit } from 'effector-solid'

export const Building = withLocation(() => {

    const [building, mountEvent, loading] = useUnit([$building, pageMounted, getBuildingFx.pending])

    onMount(() => mountEvent('/building'))

    return (
        <Layout.Page>
            <Show when={!loading()} fallback={<Loader />}>
                <Layout.Container>
                    <BreadCrumbs />
                    <Layout.Content columns={3} columnWidth="1fr">
                        <LotList data={building} />
                    </Layout.Content>
                </Layout.Container>
            </Show>
        </Layout.Page>
    )
})