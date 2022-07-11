import { Routes, Route } from "solid-app-router"
import { Component } from 'solid-js'
import { Layout } from 'shared/ui/layout'
import { Header } from 'widgets/header'
import { Footer } from 'widgets/footer'
import { Menu } from 'widgets/menu'
import { SubMenu } from 'widgets/submenu'
import { Main, Estate, Equipment, Auction, News, NewsItem, Transport, Furniture, Electronics, Building, Intangible } from 'pages'
import { SearchResults } from "features/search"
import styles from './index.module.scss'


export const App: Component = () => {

  return (
    <div class={styles.app}>
      <Layout>
        <Header />
        <Menu />
        <SubMenu />
        <SearchResults />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/estate" element={<Estate />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/:section/:id" element={<Auction />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsItem />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/furniture" element={<Furniture />}/>
          <Route path="/electronics" element={<Electronics />}/>
          <Route path="/building" element={<Building />}/>
          <Route path="/intangible" element={<Intangible />}/>
        </Routes>
        <Footer />
      </Layout>
    </div>
  )
}