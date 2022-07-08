import { Show, onMount } from 'solid-js'
import { LotList } from "entities/lot/ui/lot-list"
import { Layout } from "shared/ui/layout"
import { BreadCrumbs } from "features/breadcrumbs"
import { Loader } from 'shared/ui/loader'
import { $furniture, pageMounted, getFurnitureFx } from './model'
import { withLocation } from 'shared/hocs'
import { useUnit } from 'effector-solid'

export const Furniture = withLocation(() => {

    const [furniture, mountEvent, loading] = useUnit([$furniture, pageMounted, getFurnitureFx.pending])

    onMount(() => mountEvent('/furniture'))

    return (
        <Layout.Page>
            <Show when={!loading()} fallback={<Loader />}>
                <Layout.Container>
                    <BreadCrumbs />
                    <Layout.Content columns={3} columnWidth="1fr">
                        <LotList data={furniture} />
                    </Layout.Content>
                </Layout.Container>
            </Show>
        </Layout.Page>
    )
})