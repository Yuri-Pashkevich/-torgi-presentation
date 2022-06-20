import { LotList } from "entities/lot/ui/lot-list"
import { onMount } from "solid-js"
import { getProperty } from "pages/property/api"
import { Layout } from "shared/ui/layout"
import { state } from 'shared/model'
import { BreadCrumbs } from "features/breadcrumbs"

export const Property = () => {

    onMount(async () => {
        getProperty()
    })

    return (
        <Layout.Page>
            
            <Layout.Page columns={2}>
                <LotList data={state} listType="property"/>
            </Layout.Page>
        </Layout.Page>
    )
}