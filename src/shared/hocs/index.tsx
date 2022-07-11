import { Component } from 'solid-js'
import { useLocation, useParams } from "solid-app-router"
import { setPath } from 'shared/helpers/handleMenuSelect'

export const withLocation = (FC: Component<{pathname: string, id: string}>) => {
    return () => {
        const { id } = useParams()
        const { pathname } = useLocation()
        const path = pathname.split('/')[1]
        setPath(`/${path}`)
        return <FC pathname={pathname} id={id}/>
    }
} 
