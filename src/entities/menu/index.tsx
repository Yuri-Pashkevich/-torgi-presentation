import { styled } from "solid-styled-components";
import { Container } from 'app/layout'
import { For } from "solid-js";

const menuItems = ['Все категории', 'Недвижимость', 'Транспорт и запчасти', 'Оборудование', 'Мебель, интерьер', 'Электроника', 'Строительство', 'Нематериальное', 'Иное']

export const Menu = () => {

    let menuList: HTMLUListElement | undefined;
    const handleMenuClick = (e: any) => {
        menuList?.childNodes.forEach((menuItem: any) => {
            menuItem.classList.remove('active')
        })
        e.target.classList.add('active')
    }

    return (
        <MenuStyles>
            <Container>
                <MenuList ref={menuList}>
                    <For each={menuItems}>{(item, index) =>
                        <MenuItem onClick={handleMenuClick} class={`${index() === 0 ? 'active' : null}`}>
                            {item}
                        </MenuItem>
                    }
                    </For>
                </MenuList>
            </Container>
        </MenuStyles>
    )
}


const MenuStyles = styled.div`
    background-color: var(--grey-800);
    color: var(--white);
    .active {
        background-color: var(--yellow);
        color: var(--grey-800);
    }
`

const MenuList = styled.ul`
    display: flex;
    align-items: center;
`

const MenuItem = styled.a`
    text-transform: uppercase;
    font-size: 0.9rem;
    cursor: pointer;
    font-weight: 600;
    padding: 0.8rem .5rem;
    &:hover {
        color: var(--yellow-400);
        
    }
`