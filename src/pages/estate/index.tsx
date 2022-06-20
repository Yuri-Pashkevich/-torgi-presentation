import { LotList } from "entities/lot/ui/lot-list"
import { onMount } from "solid-js"
import { getEstate } from "pages/estate/api"
import { Layout } from "shared/ui/layout"
import { state } from 'shared/model'
import { BreadCrumbs } from "features/breadcrumbs"

export const Estate = () => {

    onMount(async () => {
        getEstate()
    })

    return (
        <Layout.Page>       
            <Layout.Page columns={3}>
                <LotList data={state} listType="estate"/>
            </Layout.Page>
        </Layout.Page>
    )
}