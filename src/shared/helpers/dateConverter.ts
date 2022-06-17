export const dateConverter = (date: string) => {

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
        return formattedDate
    }
    return null
}