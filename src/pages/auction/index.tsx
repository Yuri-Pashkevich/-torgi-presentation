import { Show, onMount, createEffect, on } from 'solid-js'
import { convertDate } from 'shared/helpers/convertDate'
import { Layout } from 'shared/ui/layout'
import styles from './index.module.scss'
import { Button } from 'shared/ui/button/button'
import { BreadCrumbs } from 'features/breadcrumbs'
import { Loader } from 'shared/ui/loader'
import { pageMounted, $auction, getAuctionFx } from './model'
import { useUnit } from 'effector-solid'
import { withLocation } from 'shared/hocs'
import { searchPathname } from 'features/search/model'

export const Auction = withLocation(({ pathname }) => {

    const [auction, mountEvent, loading] = useUnit([$auction, pageMounted, getAuctionFx.pending])

    onMount(() => mountEvent(pathname))

    createEffect(on(searchPathname, (a) => {
        mountEvent(a)
    }, { defer: true }))

    return (
        <Layout.Page>
            <Show when={!loading()} fallback={<Loader />}>
                <Layout.Container>
                    <BreadCrumbs />
                    <div class={styles.auction}>
                        <h2 class={styles.auction_title}>{auction().name}</h2>
                        <div class={styles.auction_content}>
                            <div class={styles.auction_leftbar}>
                                <div class={styles.image_box}>
                                    <img src={auction().image} alt="img"></img>
                                </div>
                                <div class={styles.auction_description}>
                                    <div class={styles.description_title}>Описание</div>
                                    {auction().description}
                                </div>
                                <div class={styles.auction_description}>
                                    <div class={styles.description_title}>Местонахождение</div>
                                    {auction().address}
                                </div>
                            </div>
                            <ul class={styles.auction_rightbar}>
                                <li class={styles.lot_title}>
                                    Прием заявок <br />на участие в торгах
                                </li>
                                <li class={styles.lot_number}>
                                    Лот №{auction().lot_number}
                                </li>
                                <li>
                                    <span>Начальная стоимость</span>
                                    <span>{auction().initial_price} бел. руб.</span>
                                </li>
                                <li>
                                    <span>Сумма задатка</span>
                                    <span>{auction().deposit} бел. руб.</span>
                                </li>
                                <li>
                                    <span>Начало подачи заявок</span>
                                    <span>{auction().request_start && convertDate(auction().request_start)}</span>
                                </li>
                                <li>
                                    <span>Окончание подачи заявок </span>
                                    <span>{auction().request_end && convertDate(auction().request_end)}</span>
                                </li>
                                <li>
                                    <span>Начало торгов</span>
                                    <span>{auction().auction_start && convertDate(auction().auction_start)}</span>
                                </li>
                                <li>
                                    <span>Окончание торгов </span>
                                    <span>{auction().auction_end ? convertDate(auction().auction_end) : '–'}</span>
                                </li>
                                <Button value="Подать заявку" type="submit" />
                            </ul>
                        </div>
                    </div>
                </Layout.Container>
            </Show>
        </Layout.Page>
    )
})