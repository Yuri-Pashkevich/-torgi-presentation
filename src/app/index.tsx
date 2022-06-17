import type { Component } from 'solid-js';
import { Layout } from './layout'
import style from './index.module.scss'

export const App: Component = () => {
  return (
    <div class={style.app}>
      <Layout>
        bla-bla content
      </Layout>
    </div>
  );
};

