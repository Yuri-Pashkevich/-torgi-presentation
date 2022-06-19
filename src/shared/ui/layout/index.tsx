import { JSXElement } from "solid-js"
import style from './index.module.scss'

interface LayoutProps {
  children: JSXElement
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main style={style.main}>
      {children}
    </main>
  )
}

interface ContainerProps extends LayoutProps { }
interface ContentProps extends LayoutProps {
  columns?: number
}
interface PageProps extends ContentProps { }

export const Container = ({ children }: ContainerProps) => <div class={style.container}>{children}</div>

export const Content = ({ children, columns }: ContentProps) => {

  const defaultStyles = `
    margin-top: 1.25rem;
  `
  const columnsStyles = `
    display: grid;
    position: relative;
    margin-top: 1.25rem;
    gap: 1.25rem;
    grid-template-columns: 320px 1fr
  `

  if (columns) {
    return (
      <Container>
        <div style={columnsStyles}>
          {children}
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div style={defaultStyles}>
        {children}
      </div>
    </Container>
  )
}

export const Page = ({ children, columns }: PageProps) => {

  const columnsStyles = `
    display: grid;
    gap: 1.25rem;
    grid-template-columns: repeat(${columns}, 1fr)
  `

  if (columns) {
    return (
        <section style={columnsStyles}>
          {children}
        </section>
    )
  }

  return (
      <section style={''}>
        {children}
      </section>
  )
}


Layout.Container = Container
Layout.Content = Content
Layout.Page = Page