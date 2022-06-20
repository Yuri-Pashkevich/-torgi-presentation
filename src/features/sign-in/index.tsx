import { AiOutlineUser } from 'solid-icons/ai'
import styles from './index.module.scss'
import { Button } from 'shared/ui/button/button'

export const SignIn = () => {
    return (
        <div class={styles.sign_in}>
            <AiOutlineUser/>
            <Button
                type="button"
                value="Вход"
            />
        </div>
    )
}

