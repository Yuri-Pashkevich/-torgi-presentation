import { styled } from "solid-styled-components"

export const NewsSidebar = () => {
  return (
    <NewsSidebarStyles>
        <SidebarTitle>
            Лента новостей
        </SidebarTitle>
        <SidebarItem/>
        <SidebarItem/>
        <SidebarItem/>
        <SidebarItem/>
        <SidebarItem/>
        <OverflowMask/>
    </NewsSidebarStyles>
  )
}

const OverflowMask = styled.div`
    height: 4rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(0deg, #fff, rgba(255,255,255,0));

`

const NewsSidebarStyles = styled.div`
    color: var(--grey-900);
    position: relative;
    width: 20rem;
    padding: 1.25rem;
    border-top: 4px solid var(--yellow);
    border-left: 1px solid var(--grey-200);
    border-right: 1px solid var(--grey-200);
    border-bottom: 1px solid var(--grey-200);
    max-height: calc(100vh - 128px - 1.25rem - 5rem - 1.25rem);
    min-height: calc(100vh - 128px - 1.25rem - 5rem - 1.25rem);
    overflow: hidden;
`

const SidebarTitle = styled.div`
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 500;  
    margin-bottom: 1.25rem;
`

const SidebarItemStyles = styled.div`
    
`

const SidebarItem = () => {
    return (
        <SidebarItemStyles>
            <SidebarDate/>

            <SidebarNewsItem/>
        </SidebarItemStyles>
    )
}

const SidebarNewsItem = () => {
    return <SidebarNewsItemStyle>
        МИПК и ПК БНТУ объявляет набор слушателей в группу по подготовке временных (антикризисных) управляющих с 22.08.2022
    </SidebarNewsItemStyle>
}

const SidebarNewsItemStyle = styled.div`
    margin: 0.2rem 0 1.25rem;
    font-size: 0.9rem;
    &:after {
        content: "";
        display: block;
        width: 300px;
        height: 1px;
        background: radial-gradient(circle, var(--grey-200), var(--white));
        margin-top: 1.25rem;
    }
`

export const DateConverter = (date: string) => {

    const options: any = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    
    if(date) {
        const formattedDate = new Date(date)
        .toLocaleString('ru', options)
        .split(' ')
        .join(' ')
        return formattedDate
    }
    return null
}

const SidebarDate = () => {

    const date = '2022-06-17T12:50:01.135Z'


    return <SidebarDateStyles>{DateConverter(date)}</SidebarDateStyles>
}

const SidebarDateStyles = styled.div`
    font-size: 0.8rem;
    color: var(--grey-500);
    margin-bottom: 0.5rem;
`