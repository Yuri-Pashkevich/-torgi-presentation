import { Show } from 'solid-js';
import { Link, useParams, useLocation } from 'solid-app-router'
import { AiFillHome } from 'solid-icons/ai'
import styles from './index.module.scss'
import { $auction } from 'pages/auction/model';
import { $news } from 'pages/news-item/model'
import { setPath } from 'shared/helpers/handleMenuSelect';
import { convertCategory } from 'shared/helpers/convertCategory';
import { useUnit } from 'effector-solid';


export const BreadCrumbs = () => {

    const [news, auction] = useUnit([$news, $auction])

    const { pathname } = useLocation()
    const path = pathname.split('/')[1]
    
    const { id } = useParams()

    return (
        <div class={styles.bread_crumbs}>
            <Link href="/" class={styles.home} onClick={() => setPath('/')}>
                <AiFillHome />
                Главная 
            </Link>
            <Show when={path}>
                / <Link href={`/${path}`} class={styles.category} onClick={() => setPath(`/${path}`)}>{convertCategory(path)}</Link>
            </Show>
            <Show when={id}>
               / <div class={styles.lot}> {path === 'news' ? news()?.name : auction()?.name}</div>
            </Show>
        </div>
    )
}