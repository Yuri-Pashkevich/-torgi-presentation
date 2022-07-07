import { createEffect, createStore, createEvent, sample, Store, Event } from 'effector'
import { fetchData } from 'pages/lib/fetchService/api'

export const pageMounted = createEvent<string>()

export const getDataFx = createEffect<string, any[]>()
getDataFx.use(fetchData)

export const provideStoreToSample = <T> (mount: Event<string>, store: Store<T[]>) => {
    sample({
        clock: mount,
        source: store,
        filter: (state) => state.length === 0,
        fn: (_, clockParams) => clockParams,
        target: getDataFx
    })
}

