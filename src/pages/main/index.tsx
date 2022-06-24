import { Component, onMount } from 'solid-js'
import { NewsSidebar } from "widgets/newsSidebar"
import { Carousel } from 'widgets/carousel'
import { Layout } from "shared/ui/layout"
import { LotList } from "entities/lot/ui/lot-list"
import { state } from 'shared/model'
import { getAll } from 'pages/main/api'
import styles from './index.module.scss'


export const Main: Component = () => {

    onMount(() => {
        getAll()
    })

    return (
        <Layout.Page>
            <Layout.Content columns={2}>
                <NewsSidebar />
                <div class={styles.content_right}>
                    <Carousel />
                    <Layout.Page columns={2}>
                        <LotList data={state} listType="all" count={4}/>
                    </Layout.Page>
                </div>
            </Layout.Content>
        </Layout.Page>
    )
}

