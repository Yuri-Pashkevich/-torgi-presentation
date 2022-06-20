/* @refresh reload */
import { render } from 'solid-js/web'
import { App } from 'app'
import { server } from 'shared/api'
import { Router, hashIntegration } from "solid-app-router"


server.start()
server.log()

render(() => <Router source={hashIntegration()}><App /></Router>, document.getElementById('root') as HTMLElement);