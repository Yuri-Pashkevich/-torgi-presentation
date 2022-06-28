export const convertDate = (date: string | undefined) => {

    const options: any = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    
    if(date) {
        const formattedDate = new Date(date)
        .toLocaleString('ru', options)
        .split(' ')
        .join(' ')
        const hours = (new Date(date).getHours() < 10 ? '0' : '') + new Date(date).getHours()
        const minutes =  (new Date(date).getMinutes() < 10 ? '0' : '') + new Date(date).getMinutes()
        return formattedDate + ` в ${hours}:${minutes}`
    }
    return null
}