import { Layout } from "shared/ui/layout"
import { BreadCrumbs } from "features/breadcrumbs"
import { state, InitStore } from 'shared/model'
import { getNews } from "./api"
import { NewsList } from "entities/news/ui"

export const News = () => {

    getNews()

    return (
        <Layout.Page>
            <BreadCrumbs />
            <Layout.Content columns={3} columnWidth="1fr">
                <NewsList data={state} />
            </Layout.Content>
        </Layout.Page>
    )
}

