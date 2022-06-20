import { Routes, Route } from "solid-app-router"
import { Component } from 'solid-js'
import { Layout } from 'shared/ui/layout'
import style from './index.module.scss'
import { Header } from 'widgets/header'
import { Footer } from 'widgets/footer'
import { Menu } from 'widgets/menu'
import { SubMenu } from 'widgets/submenu'
import { Estate } from 'pages/estate'
import { Main } from 'pages/main'
import { Auction } from 'pages/auction'


export const App: Component = () => {

  return (
    <div class={style.app}>
      <Layout>
        <Header />
        <Menu />
        <SubMenu/>
        <Layout.Container>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/estate" element={<Estate/>} />
            <Route path="/:section/:id" element={<Auction/>} />
          </Routes>

        </Layout.Container>
        <Footer />
      </Layout>
    </div>
  );
};

