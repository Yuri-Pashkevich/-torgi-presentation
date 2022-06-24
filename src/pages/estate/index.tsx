import { LotList } from "entities/lot/ui/lot-list"
import { getEstate } from "pages/estate/api"
import { Layout } from "shared/ui/layout"
import { state } from 'shared/model'
import { BreadCrumbs } from "features/breadcrumbs"

export const Estate = () => {

    getEstate()
    
    return (
        <Layout.Page>  
            <BreadCrumbs/>
            <Layout.Content columns={3} columnWidth="1fr">
                <LotList data={state} listType="estate"/>
            </Layout.Content>
        </Layout.Page>
    )
}