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
            <Layout.Container>
                <Layout.Content columns={2}>
                    <NewsSidebar />
                    <div class={styles.content_right}>
                        <Carousel />
                        <div class={styles.content_lots}>
                            <LotList data={state} listType="all" count={2} />
                        </div>
                    </div>
                </Layout.Content>
            </Layout.Container>
            <div class={styles.lastlots_bgc}>
                <Layout.Container>
                    <h2 class={styles.lastlots_title}>Недавно добавленные лоты</h2>
                    <Layout.Content columns={3} columnWidth="1fr" margin='0'>
                        <LotList data={state} listType="all" count={9} />
                    </Layout.Content>
                </Layout.Container>
            </div>
        </Layout.Page>
    )
}

