import { Component, onMount, Show, createMemo } from 'solid-js'
import { NewsSidebar } from "widgets/newsSidebar"
import { Carousel } from 'widgets/carousel'
import { Layout } from "shared/ui/layout"
import { LotList } from "entities/lot/ui/lot-list"
import { $all, pageMounted, getAllFx } from './model'
import { useUnit } from 'effector-solid'
import { Loader } from 'shared/ui/loader'
import styles from './index.module.scss'

export const Main: Component = () => {

    const [allLots, mountEvent, loading] = useUnit([$all, pageMounted, getAllFx.pending])

    onMount(() => mountEvent('/all'))

    const SideBar = createMemo(NewsSidebar)
    const MainLotsList = createMemo(() => <LotList data={allLots} count={2}/>)
    const LastLotsList = createMemo(() => <LotList data={allLots} count={9}/>)

    return (
        <Layout.Page>
            <Show when={!loading()} fallback={<Loader/>}>
                <Layout.Container>
                    <Layout.Content columns={2}>
                        <SideBar />
                        <div class={styles.content_right}>
                            <Carousel />
                            <div class={styles.content_lots}>
                                <MainLotsList />
                            </div>
                        </div>
                    </Layout.Content>
                </Layout.Container>
                <div class={styles.lastlots_bgc}>
                    <Layout.Container>
                        <h2 class={styles.lastlots_title}>Недавно добавленные лоты</h2>
                        <Layout.Content columns={3} columnWidth="1fr" margin='0'>
                            <LastLotsList />
                        </Layout.Content>
                    </Layout.Container>
                </div>
            </Show>
        </Layout.Page>
    )
}