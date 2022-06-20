import { Component } from 'solid-js';
import { Link, Location, useParams, useLocation } from 'solid-app-router'
import { AiFillHome } from 'solid-icons/ai'
import styles from './index.module.scss'

interface BreadCrumbsProps {
    category: string
}

export const BreadCrumbs = ({ category }: BreadCrumbsProps) => {

    const location = useLocation();
    console.log(location.pathname)

    return (
        <div class={styles.bread_crumbs}>
            <AiFillHome/>
            <div>/</div>
            <Link href="/">Главная</Link>
            <div>/</div>
            <Link href={`${location.pathname}`}>{category}</Link>
            <div>/</div>
            <Link href={`/lalalala`}>lalalalal</Link>
        </div>
    )
}

