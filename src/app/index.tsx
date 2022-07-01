import { Routes, Route } from "solid-app-router"
import { Component } from 'solid-js'
import { Layout } from 'shared/ui/layout'
import styles from './index.module.scss'
import { Header } from 'widgets/header'
import { Footer } from 'widgets/footer'
import { Menu } from 'widgets/menu'
import { SubMenu } from 'widgets/submenu'
import { Estate } from 'pages/estate'
import { Main } from 'pages/main'
import { Auction } from 'pages/auction'
import { NewsItem } from "pages/news-item"
import { News } from "pages/news"
import { Equipment } from "pages/equipment"


export const App: Component = () => {

  return (
    <div class={styles.app}>
      <Layout>
        <Header />
        <Menu />
        <SubMenu/>
          <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/estate" element={<Estate/>} />
              <Route path="/equipment" element={<Equipment/>} />
              <Route path="/:section/:id" element={<Auction/>} />
              <Route path="/news" element={<News/>}/>
              <Route path="/news/:id" element={<NewsItem/>}/>
          </Routes>
        <Footer />
      </Layout>
    </div>
  );
};

