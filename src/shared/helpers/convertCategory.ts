export const convertCategory = (category: string) => {
    switch (category) {
        case 'estate': return 'Недвижимость'; break;
        case 'transport': return 'Транспорт и запчасти'; break;
        case 'equipment': return 'Оборудование'; break;
        case 'furniture': return 'Мебель, интерьер'; break;
        case 'electronics': return 'Электроника'; break;
        case 'building': return 'Строительство'; break;
        case 'intangible': return 'Нематериальное'; break;

        default: return null
    }
}