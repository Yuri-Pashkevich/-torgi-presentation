import { styled } from "solid-styled-components";
import { Container } from 'app/layout'

export const Footer = () => {
  return (
    <FooterStyles>
        <Container>
            Footer


        </Container>


    </FooterStyles>
  )
}


const FooterStyles = styled.div`
    background-color: var(--yellow);
    height: 5rem;
    color: white;
    margin-top: auto;
`