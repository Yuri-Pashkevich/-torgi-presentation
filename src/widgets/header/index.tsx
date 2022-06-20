import { Container } from 'shared/ui/layout'
import styles from './index.module.scss'
import logo from './logo.png'
import { Search } from 'features/search'
import { SignIn } from 'features/sign-in'

export const Header = () => {
  return (
    <header class={styles.header}>
      <Container>
        <div class={styles.header_content}>
          <div class={styles.header_left}>
            <img src={logo} alt="logo" />
            <div>
              <div class={styles.logo_title}>Likvidator<span>.</span><span>gov</span><span>.</span><span>by</span></div>
              <div class={styles.logo_subtitle}>продажа имущества ликвидируемых предприятий</div>
            </div>
          </div>
          <div class={styles.header_right}>
            <Search/>
            <SignIn/>
          </div>
        </div>
      </Container>
    </header>
  )
}