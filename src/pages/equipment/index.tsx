import { Layout } from "shared/ui/layout"
import { LotList } from "entities/lot/ui/lot-list"
import { Show, onMount } from 'solid-js'
import { BreadCrumbs } from "features/breadcrumbs"
import { Loader } from 'shared/ui/loader'
import { useUnit } from "effector-solid"
import { $equipment, pageMounted, getEquipment } from "./model"
import { withLocation } from "shared/hocs"

export const Equipment = withLocation(() => {

    const [equipment, mountEvent, loading] = useUnit([$equipment, pageMounted, getEquipment.pending])

    onMount(() => {
        mountEvent('/equipment')
    })

    return (
        <Layout.Page>
            <Show when={!loading()} fallback={<Loader />}>
                <Layout.Container>
                    <BreadCrumbs />
                    <Layout.Content columns={3} columnWidth="1fr">
                        <LotList data={equipment} />
                    </Layout.Content>
                </Layout.Container>
            </Show>
        </Layout.Page>
    )
})

