import { Show } from 'solid-js'
import { getAuction } from 'pages/auction/api'
import { useLocation } from 'solid-app-router'
import { state } from 'shared/model'
import { convertDate } from 'shared/helpers/convertDate'
import { Layout } from 'shared/ui/layout'
import styles from './index.module.scss'
import { Button } from 'shared/ui/button/button'
import { BreadCrumbs } from 'features/breadcrumbs'
import { setPath } from 'shared/helpers/handleMenuSelect'
import { Loader } from 'shared/ui/loader'

export const Auction = () => {

    const { pathname } = useLocation()
    getAuction(pathname)

    const path = pathname.split('/')[1]
    setPath(`/${path}`)

    return (
        <Layout.Page>
            <Layout.Container>
                <Show when={state.isAuctionLoaded} fallback={<Loader/>}>
                    <BreadCrumbs/>
                    <div class={styles.auction}>
                        <h2 class={styles.auction_title}>{state.auction?.name}</h2>
                        <div class={styles.auction_content}>
                            <div class={styles.auction_leftbar}>
                                <div class={styles.image_box}>
                                    <img src={state.auction?.image} alt="img"></img>
                                </div>
                                <div class={styles.auction_description}>
                                    <div class={styles.description_title}>Описание</div>
                                    {state.auction?.description}
                                </div>
                                <div class={styles.auction_description}>
                                    <div class={styles.description_title}>Местонахождение</div>
                                    {state.auction?.address}
                                </div>
                            </div>
                            <ul class={styles.auction_rightbar}>
                                <li class={styles.lot_title}>
                                    Прием заявок <br />на участие в торгах
                                </li>
                                <li class={styles.lot_number}>
                                    Лот №{state.auction?.lot_number}
                                </li>
                                <li>
                                    <span>Начальная стоимость</span>
                                    <span>{state.auction?.initial_price} бел. руб.</span>
                                </li>
                                <li>
                                    <span>Сумма задатка</span>
                                    <span>{state.auction?.deposit} бел. руб.</span>
                                </li>
                                <li>
                                    <span>Начало подачи заявок</span>
                                    <span>{state.auction?.request_start && convertDate(state.auction.request_start)}</span>
                                </li>
                                <li>
                                    <span>Окончание подачи заявок </span>
                                    <span>{state.auction?.request_end && convertDate(state.auction.request_end)}</span>
                                </li>
                                <li>
                                    <span>Начало торгов</span>
                                    <span>{state.auction?.auction_start && convertDate(state.auction.auction_start)}</span>
                                </li>
                                <li>
                                    <span>Окончание торгов </span>
                                    <span>{state.auction?.auction_end ? convertDate(state.auction.auction_end) : '–'}</span>
                                </li>
                                <Button value="Подать заявку" type="submit" />
                            </ul>
                        </div>
                    </div>
                </Show>
            </Layout.Container>
        </Layout.Page>
    )
}