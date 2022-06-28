import { For, onMount } from 'solid-js'
import styles from './index.module.scss'
import { Link } from 'solid-app-router'
import { convertDate } from 'shared/helpers/convertDate'
import newsImg from './1.jpg'
import { news } from 'entities/news/model'
import { getNews } from 'entities/news/api'


export const NewsList = () => {

    onMount(() => getNews())

    return (
        <For each={news()} fallback={<p>Loading...</p>}>{(newsItem) =>
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