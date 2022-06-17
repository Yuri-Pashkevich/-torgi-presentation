import { JSXElement } from "solid-js"
import { createGlobalStyles } from "solid-styled-components"
import { styled } from "solid-styled-components"
import { Header } from 'entities/header'
import { Footer } from 'entities/footer'
import { Menu } from 'entities/menu'
import { NewsSidebar } from 'entities/newsSidebar'


interface LayoutProps {
    children: JSXElement
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <>
        <GlobalStyles/>
        <LayoutStyles>
            <Header/>
            <Menu/>
            <Container>
                <ContentWrapper>
                    <NewsSidebar/>
                    {children}
                </ContentWrapper>
            </Container>
            <Footer/>
        </LayoutStyles>
    </>



  )
}

const LayoutStyles = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const GlobalStyles = () => {
  const Styles = createGlobalStyles`

    body {
        padding: 0;
        margin: 0;
        font-family: "Segoe UI", sans-serif;
    }

    ul, li {
        padding: 0;
        margin: 0;
        list-style: none
    }

    h1, h2, h3, h4, h5 {
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration-line: none;
    }

    * {
      box-sizing: border-box;
    }

    :root {
        --white: #fff;
        --black: #000;
        
        --yellow: #ffeb3b;    
        --yellow-50: #fffde7;
        --yellow-100: #fff9c4;
        --yellow-200: #fff59d;
        --yellow-300: #fff176;
        --yellow-400: #ffee58;
        --yellow-500: #ffeb3b;
        --yellow-600: #fdd835;
        --yellow-700: #fbc02d;
        --yellow-800: #f9a825;
        --yellow-900: #f57f17;

        --grey: #9e9e9e;
        --grey-50: #fafafa;
        --grey-100: #f5f5f5;
        --grey-200: #eeeeee;
        --grey-300: #e0e0e0;
        --grey-400: #bdbdbd;
        --grey-500: #9e9e9e;
        --grey-600: #757575;
        --grey-700: #616161;
        --grey-800: #424242;
        --grey-900: #212121;
    }

  `;
  return <Styles />;
};

export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
`

const ContentWrapper = styled.div`
    display: flex;
    gap: 1.25rem;
    margin-top: 1.25rem;
`