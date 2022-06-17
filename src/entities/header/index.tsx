import { Container } from 'app/layout'
import styles from './index.module.scss'
import logo from './logo.png'

export const Header = () => {
  return (
    <header class={styles.header}>
      <Container>
        <div class={styles.header_left}>
          <img src={logo} alt="logo" />
          <div>
            <div class={styles.logo_title}>Torgi<span>.</span><span>by</span></div>
            <div class={styles.logo_subtitle}>электронные торги беларуси</div>
          </div>
        </div>
      </Container>
    </header>
  )
}