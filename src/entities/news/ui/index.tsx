import { For, Accessor } from 'solid-js'
import styles from './index.module.scss'
import { Link } from 'solid-app-router'
import { convertDate } from 'shared/helpers/convertDate'
import newsImg from './1.jpg'

interface NewsListProps {
    news: Accessor<NewsItemProps[] | undefined>
}

export const NewsList = ({ news }: NewsListProps) => {

    return (
        <For each={news()}>{(newsItem) =>
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

const NewsItem = ({ id, category, date, name }: NewsItemProps) => {
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