import { JSXElement } from "solid-js"
import { Header } from 'entities/header'
import { Footer } from 'entities/footer'
import { Menu } from 'entities/menu'
import { NewsSidebar } from 'entities/newsSidebar'
import style from './index.module.scss'

interface LayoutProps {
    children: JSXElement
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <main style={style.main}>
            <Header/>
            <Menu/>
            <Container>
                <ContentWrapper>
                    <NewsSidebar/>
                    {children}
                </ContentWrapper>
            </Container>
            <Footer/>
    </main>
  )
}

export const Container = ({ children }: LayoutProps) => <div class={style.container}>{children}</div>
export const ContentWrapper = ({ children }: LayoutProps) => <div class={style.content_wrapper}>{children}</div>