export const convertDate = (date: string | undefined) => {

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    
    if(date) {
        const formattedDate = new Date(date)
        .toLocaleString('ru', options)
        .split(',')
        formattedDate.splice(1, 0, ' в').join('')
        // const hours = (new Date(date).getHours() < 10 ? '0' : '') + new Date(date).getHours()
        // const minutes =  (new Date(date).getMinutes() < 10 ? '0' : '') + new Date(date).getMinutes()
        return formattedDate
    }
    return null
}