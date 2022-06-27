import { For } from 'solid-js'
import { InitStore } from 'shared/model'
import styles from './index.module.scss'
import { Link } from 'solid-app-router'
import { convertDate } from 'shared/helpers/convertDate'
import newsImg from './1.jpg'

interface NewsListProps {
    data: InitStore
}

export const NewsList = ({ data }: NewsListProps) => {
    return (
        <For each={data.news} fallback={<p>Loading...</p>}>{(newsItem) =>
            <NewsItem {...newsItem} />
        }

        </For>
    )
}

interface NewsItemProps {
    id: number,
    category: string,
    date: string,
    name: string,
    description: string
}

const NewsItem = ({ id, category, date, name, description }: NewsItemProps) => {
    return (
        <Link href={`/news/${id}`} class={styles.news_item}>
            <div class={styles.image_box}>
                <img src={newsImg} alt="img" />
            </div>
            <ul class={styles.text_box}>
                <li>{category}</li>
                <li>{name}</li>
                <li>Дата публикации {convertDate(date)}</li>
            </ul>
        </Link>
    )
}