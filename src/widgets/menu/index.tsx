import { Container } from 'shared/ui/layout'
import { For } from "solid-js"
import styles from './index.module.scss'

const menuItems = ['Все категории', 'Недвижимость', 'Транспорт и запчасти', 'Оборудование', 'Мебель, интерьер', 'Электроника', 'Строительство', 'Нематериальное']
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
                    <For each={menuItems}>{(item, index) =>
                        <a onClick={handleMenuClick} class={`${styles.menu_item} ${index() === 0 ? styles.active : ''}`}>
                            {item}
                        </a>
                    }
                    </For>
                </ul>
            </Container>
        </nav>
    )
}