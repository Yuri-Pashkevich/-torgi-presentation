import { Component, onMount, Show } from 'solid-js'
import { NewsSidebar } from "widgets/newsSidebar"
import { Carousel } from 'widgets/carousel'
import { Layout } from "shared/ui/layout"
import { LotList } from "entities/lot/ui/lot-list"
import { pageMounted, $all, getAllFx } from 'pages/main/model'
import { useUnit } from 'effector-solid'
import { Loader } from 'shared/ui/loader'
import styles from './index.module.scss'

export const Main: Component = () => {

    const [allLots, mountEvent, loading] = useUnit([$all, pageMounted, getAllFx.pending])

    onMount(() => mountEvent())

    return (
        <Layout.Page>
            <Show when={!loading()} fallback={<Loader/>}>
                <Layout.Container>
                    <Layout.Content columns={2}>
                        <NewsSidebar />
                        <div class={styles.content_right}>
                            <Carousel />
                            <div class={styles.content_lots}>
                                <LotList data={allLots} count={2} />
                            </div>
                        </div>
                    </Layout.Content>
                </Layout.Container>
                <div class={styles.lastlots_bgc}>
                    <Layout.Container>
                        <h2 class={styles.lastlots_title}>Недавно добавленные лоты</h2>
                        <Layout.Content columns={3} columnWidth="1fr" margin='0'>
                            <LotList data={allLots} count={9} />
                        </Layout.Content>
                    </Layout.Container>
                </div>
            </Show>
        </Layout.Page>
    )
}