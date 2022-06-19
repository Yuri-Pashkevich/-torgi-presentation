import { Component, onMount } from 'solid-js';
import { Layout } from 'shared/ui/layout'
import style from './index.module.scss'
import { Header } from 'widgets/header'
import { Footer } from 'widgets/footer'
import { Menu } from 'widgets/menu'
import { NewsSidebar } from 'widgets/newsSidebar'
import { Routes, Route } from "solid-app-router"
import { Property } from 'pages/property'
import { Carousel } from 'widgets/slider';


export const App: Component = () => {

  return (
    <div class={style.app}>
      <Layout>
        <Header />
        <Menu />
        <Layout.Content columns={2}>
          <NewsSidebar />
          <div style={`overflow: hidden`}>
            <Carousel/>
            <Property/>

          </div>
          <Routes>
            <Route path="/property" component={Property}/>
          </Routes>
        </Layout.Content>
        <Footer />
      </Layout>
    </div>
  );
};

