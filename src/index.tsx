/* @refresh reload */
import { render } from 'solid-js/web'
import { App } from 'app'
import { server } from 'shared/api'
import { Router, hashIntegration } from "solid-app-router"
import { Provider } from 'effector-solid/scope'
import { fork } from 'effector'

server.start()
server.log()

const scope = fork()

render(() => 
    <Router source={hashIntegration()}>
        <Provider value={scope}>
            <App />
        </Provider>
    </Router>, 
    document.getElementById('root') as HTMLElement
)