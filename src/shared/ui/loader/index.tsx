import styles from './index.module.scss'
import { Layout } from 'shared/ui/layout'

export const Loader = () => {
    return (
        <Layout.Container>
            <div class={styles.loader}>
                <div class={styles.loading_spinner}>
                    <div class={styles.ldio}>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout.Container>
    )
}