import { Container } from 'shared/ui/layout'
import { For, onMount } from "solid-js"
import styles from './index.module.scss'
import { Link } from "solid-app-router"

const submenuItems = [
    { category: 'Объявления', href: '/adverts' },
    { category: 'Должники', href: '/debtors' },
    { category: 'Имущество', href: '/property' },
    { category: 'Ликвидаторы', href: '/liquidators' },
    { category: 'Электронные торги', href: '/e-trades' },
    { category: 'Новоcти', href: '/news' },
]
let menuList: HTMLUListElement | undefined

export const SubMenu = () => {

    return (
        <Container>
            <nav class={styles.menu}>
                <ul class={styles.menu_list} ref={menuList} >
                    <For each={submenuItems}>{({ category, href }) =>
                        <Link href={href} class={`${styles.menu_item}`}>
                            {category}
                        </Link>
                    }
                    </For>
                </ul>
            </nav>
        </Container>
    )
}