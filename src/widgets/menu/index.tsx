import { Container } from 'shared/ui/layout'
import { For } from "solid-js"
import styles from './index.module.scss'
import { Link } from "solid-app-router"

const menuItems = [
    { category: 'Все категории', href: '/' },
    { category: 'Недвижимость', href: '/property' },
    { category: 'Транспорт и запчасти', href: '/transport' },
    { category: 'Оборудование', href: '/equipment' },
    { category: 'Мебель, интерьер', href: '/furniture' },
    { category: 'Электроника', href: '/electronics' },
    { category: 'Строительство', href: '/building' },
    { category: 'Нематериальное', href: '/intangible' }
]
let menuList: HTMLUListElement | undefined

export const Menu = () => {


    const handleMenuClick = (e: any) => {
        menuList?.childNodes.forEach((menuItem: any) => {
            menuItem.classList.remove(styles.active)
        })
        e.target.classList.add(styles.active)
    }

    return (
        <nav class={styles.menu}>
            <Container>
                <ul class={styles.menu_list} ref={menuList} >
                    <For each={menuItems}>{({category, href}, index) =>
                        <Link href={href} onClick={handleMenuClick} class={`${styles.menu_item} ${index() === 0 ? styles.active : ''}`}>
                            {category}
                        </Link>
                    }
                    </For>
                </ul>
            </Container>
        </nav>
    )
}