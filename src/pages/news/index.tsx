import { Layout } from "shared/ui/layout"
import { BreadCrumbs } from "features/breadcrumbs"
import { NewsList } from "entities/news/ui"


export const News = () => {

    return (
        <Layout.Page>
            <BreadCrumbs />
            <Layout.Content columns={3} columnWidth="1fr">
                <NewsList />
            </Layout.Content>
        </Layout.Page>
    )
}

