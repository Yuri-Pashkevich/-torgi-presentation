import { Routes, Route } from "solid-app-router"
import { Component } from 'solid-js'
import { Layout } from 'shared/ui/layout'
import style from './index.module.scss'
import { Header } from 'widgets/header'
import { Footer } from 'widgets/footer'
import { Menu } from 'widgets/menu'
import { SubMenu } from 'widgets/submenu'
import { Property } from 'pages/property'
import { Main } from 'pages/main'

import { Link, useLocation } from 'solid-app-router'

export const App: Component = () => {

  const location = useLocation();
console.log(location.pathname)

  return (
    <div class={style.app}>
      <Layout>
        <Header />
        <Menu />
        <SubMenu/>
        <Layout.Container>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/property" element={<Property/>} />
          </Routes>

        </Layout.Container>
        <Footer />
      </Layout>
    </div>
  );
};

