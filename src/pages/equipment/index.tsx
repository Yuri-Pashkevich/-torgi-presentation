import { Layout } from "shared/ui/layout"
import { LotList } from "entities/lot/ui/lot-list"
import { Show, onMount } from 'solid-js'
import { BreadCrumbs } from "features/breadcrumbs"
import { Loader } from 'shared/ui/loader'
import { useUnit } from "effector-solid"
import { $equipment, pageMounted, getEquipmentFx } from "./model"

export const Equipment = () => {

    const [equipment, mountEvent, loading] = useUnit([$equipment, pageMounted, getEquipmentFx])

    onMount(() => mountEvent())

    return (
        <Layout.Page>
            <Layout.Container>
                <Show when={!loading()} fallback={<Loader />}>
                    <BreadCrumbs />
                    <Layout.Content columns={3} columnWidth="1fr">
                        <LotList data={equipment} />
                    </Layout.Content>
                </Show>
            </Layout.Container>
        </Layout.Page>
    )
}