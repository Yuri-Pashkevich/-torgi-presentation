import { styled } from "solid-styled-components"
import { Container } from 'app/layout'
import logo from './logo.png'

export const Header = () => {
  return (
    <HeaderStyles>
      <Container>
        <HeaderWrapper>
          <HeaderLogo>
            <img src={logo} alt="logo" />
           

            
          </HeaderLogo>
          <div>
            <HeaderTitle>Torgi<span>.</span><span>by</span></HeaderTitle>
            <HeaderSubTitle>электронные торги беларуси</HeaderSubTitle>
          </div>
        </HeaderWrapper>




      </Container>

    </HeaderStyles>
  )
}

const HeaderStyles = styled.header`
  text-transform: uppercase;
  display: flex;
  align-items: center;
`
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 0;
  gap: 0.5rem;
`
const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 4rem;
  }
`
const HeaderTitle = styled.div`
  margin-top: -0.4rem;
  font-weight: 900;
  font-size: 2.2rem;
  color: #ffca18;
  span:first-child {
    color: var(--grey-500);

  }
  span {
    color: #585858;
  }
`
const HeaderSubTitle = styled.div`
  font-weight: 400;
  margin-top: -0.4rem;
  color: var(--grey-600);
`