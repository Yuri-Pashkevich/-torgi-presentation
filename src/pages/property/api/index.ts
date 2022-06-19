import { setState } from 'shared/model'

export const getProperty = async () => {
    const res = await fetch('/property')
    setState('property', await res.json())
}