import { Container } from 'shared/ui/layout'
import styles from './index.module.scss'
import logo from './logo.png'
import { Search } from 'features/search'
import { SignIn } from 'features/sign-in'
import { Link } from 'solid-app-router'

export const Header = () => {
  return (
    <header class={styles.header}>
      <Container>
        <div class={styles.header_content}>
          <Link href="/" class={styles.header_left}>
            <img src="https://raw.githubusercontent.com/Yuri-Pashkevich/-torgi-presentation/gh-pages/assets/logo.png" alt="logo" />
            <div>
              <div class={styles.logo_title}>Likvidator<span>.</span><span>gov</span><span>.</span><span>by</span></div>
              <div class={styles.logo_subtitle}>продажа имущества ликвидируемых предприятий</div>
            </div>
          </Link>
          <div class={styles.header_right}>
            <Search/>
            <SignIn/>
          </div>
        </div>
      </Container>
    </header>
  )
}