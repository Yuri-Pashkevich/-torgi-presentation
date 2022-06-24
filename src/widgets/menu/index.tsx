import { Container } from 'shared/ui/layout'
import { For, createSignal, createEffect } from "solid-js"
import styles from 'shared/helpers/index.module.scss'
import { Link, useLocation } from "solid-app-router"
import { handleMenuSelect, path, setPath } from 'shared/helpers/handleMenuSelect'

const menuItems = [
    { category: 'Главная', href: '/' },
    { category: 'Недвижимость', href: '/estate' },
    { category: 'Транспорт и запчасти', href: '/transport' },
    { category: 'Оборудование', href: '/equipment' },
    { category: 'Мебель, интерьер', href: '/furniture' },
    { category: 'Электроника', href: '/electronics' },
    { category: 'Строительство', href: '/building' },
    { category: 'Нематериальное', href: '/intangible' }
]

export const Menu = () => {

    let menuList: HTMLUListElement | undefined
  
    return (
        <nav class={styles.menu}>
            <Container>
                <ul class={styles.menu_list} ref={menuList}>
                    <For each={menuItems}>{({ category, href }) =>
                        <Link
                            href={href}
                            onClick={(e) => {handleMenuSelect(e, menuList); setPath(href)} }
                            class={styles.menu_item}
                            classList={{ [styles.active]: href === path() }}>
                            {category}
                        </Link>
                    }
                    </For>
                </ul>
            </Container>
        </nav>
    )
}