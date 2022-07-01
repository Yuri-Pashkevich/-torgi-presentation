export const fetchEquipment = async () => {
    const res = await fetch('/equipment')
    return res.json()
}