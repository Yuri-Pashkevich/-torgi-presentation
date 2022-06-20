import { setState } from 'shared/model'

export const getAll = async () => {
    const res = await fetch('/all')
    setState('all', await res.json())
}