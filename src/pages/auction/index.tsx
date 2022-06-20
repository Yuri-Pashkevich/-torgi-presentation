import { onMount, For } from 'solid-js'
import { getAuction } from 'pages/auction/api'
import { useLocation } from 'solid-app-router'
import { state } from 'shared/model'
import { dateConverter } from 'shared/helpers/dateConverter'
import { Layout } from 'shared/ui/layout'
import styles from './index.module.scss'
import { Button } from 'shared/ui/button/button'

export const Auction = () => {

    const url = useLocation()

    onMount(() => {
        getAuction(url.pathname)
    })

    return (
        <Layout.Page>
            <For each={state.auction} fallback={<p>Loading...</p>}>{(lot) =>
                <div class={styles.auction}>
                    <h2 class={styles.auction_title}>{lot.name}</h2>
                    <div class={styles.auction_content}>
                        <div class={styles.auction_leftbar}>
                            <div class={styles.image_box}>
                                <img src={lot.image} alt="img"></img>
                            </div>
                            <div class={styles.auction_description}>
                                <div class={styles.description_title}>Описание</div>
                                {lot.description}
                            </div>
                            <div class={styles.auction_description}>
                                <div class={styles.description_title}>Местонахождение</div>
                                {lot.address}
                            </div>
                        </div>
                        <ul class={styles.auction_rightbar}>
                            <li class={styles.lot_title}>
                                Прием заявок <br/>на участие в торгах
                            </li>
                            <li class={styles.lot_number}>
                                Лот №{lot.lot_number}
                            </li>
                            <li>
                                <span>Начальная стоимость</span>
                                <span>{lot.initial_price} бел. руб.</span>
                            </li>
                            <li>
                                <span>Сумма задатка</span> 
                                <span>{lot.deposit} бел. руб.</span>
                            </li>
                            <li>
                                <span>Начало подачи заявок</span> 
                                <span>{dateConverter(lot.request_start)}</span>
                            </li>
                            <li>
                                <span>Окончание подачи заявок </span>
                                <span>{dateConverter(lot.request_end)}</span>
                            </li>
                            <li>
                                <span>Начало торгов</span> 
                                <span>{dateConverter(lot.auction_start)}</span>
                            </li>
                            <li>
                                <span>Окончание торгов </span>
                                <span>{lot.auction_end ? dateConverter(lot.auction_end) : '–'}</span>
                            </li>
                            <Button value="Подать заявку" type="submit"/>
                        </ul>
                    </div>
                </div>
            }
            </For>
        </Layout.Page>
    )
}