import { Component } from 'solid-js'
import { useLocation } from "solid-app-router"
import { setPath } from 'shared/helpers/handleMenuSelect'

export const withLocation = (FC: Component<{pathname: string}>) => {
    return () => {
        const { pathname } = useLocation()
        const path = pathname.split('/')[1]
        setPath(`/${path}`)
        return <FC pathname={pathname}/>
    }
} 
