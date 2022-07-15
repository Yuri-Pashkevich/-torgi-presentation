import { createEffect, createStore, sample, createEvent } from 'effector'
import type { PageData } from 'shared/model'
import { fetchLots } from 'features/search/api'
import { createSignal } from 'solid-js'
import { createDebounce } from 'shared/helpers/createDebounce'

export const searchValue = createEvent<string>()
export const $value = createStore<string>('')
  .on(searchValue, (_, value) => value)

export const getLotsFx = createEffect<string, PageData[]>()
getLotsFx.use(fetchLots)

export const $filteredLots = createStore<PageData[]>([])
  .on(getLotsFx.doneData, (_, data) => data)

export const [searchPathname, setSearchPathname] = createSignal<string>('')

export const hideSearchList = createEvent()
export const showSearchList = createEvent()

export const hideList = (pathname: string) => {
  hideSearchList()
  setSearchPathname(pathname)
}

export const $toggleList = createStore(false)
  .on(hideSearchList, () => false)
  .on(showSearchList, () => true)

const debouncedSearchValue = createDebounce(searchValue, 500)

sample({
  clock: debouncedSearchValue,
  filter: (value) => value !== '',
  fn: (value) => value.toLocaleLowerCase(),
  target: getLotsFx
})