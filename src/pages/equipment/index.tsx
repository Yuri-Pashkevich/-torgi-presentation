import { Layout } from "shared/ui/layout";
import { LotList } from "entities/lot/ui/lot-list"
import { Show, onMount } from 'solid-js'
import { state } from 'shared/model'
import { BreadCrumbs } from "features/breadcrumbs"
import { Loader } from 'shared/ui/loader'
import { isLoaded } from 'shared/model'

export const Equipment = () => {

    return (
        <Layout.Page>
            <Layout.Container>
                <Show when={isLoaded()} fallback={<Loader />}>
                    <BreadCrumbs />
                    <Layout.Content columns={3} columnWidth="1fr">
                        <LotList data={state} listType="estate" />
                    </Layout.Content>
                </Show>
            </Layout.Container>
        </Layout.Page>
    )
}