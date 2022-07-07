import { createServer } from "miragejs"

export const server = {
    start: () => createServer,
    log: () => console.log('server is working')
}

createServer({
    routes() {
        this.post("/all", (schema, request) => {
            const { count } = JSON.parse(request.requestBody)
            return all.filter((it, i) => i < count)
        }),
        this.get("/all", () => all),
        this.post("/all", (schema, request) => {
            let req = JSON.parse(request.requestBody)
            return all.filter(({name}) => name.includes(req.name))
        })
        this.get("/estate", () => estate),
        this.get("/estate/:id", (schema, request) => {
            let reqId = request.params.id
            return {...estate.find(({id}) => id === +reqId)}
        })
        this.get("/transport", () => transport),
        this.get("/transport/:id", (schema, request) => {
            let reqId = request.params.id
            return {...transport.find(({id}) => id === +reqId)}
        })
        this.get("/equipment", () => equipment),
        this.get("/equipment/:id", (schema, request) => {
            let reqId = request.params.id
            return {...equipment.find(({id}) => id === +reqId)}
        })
        this.get("/news", () => news),
        this.get("/news/:id", (schema, request) => {
            let reqId = request.params.id
            return {...news.find(({id}) => id === +reqId)}
        })
    },
})


const estate = [
    {   
        id: 1, category: 'estate', lot_number: 25084, initial_price: 937040.00, address: 'Лидский район, Дубровенский с/с, д. Огородники, ул. Новая, 1В', name: 'Здание гостиницы, д. Огородники', image: 'https://v-grand.ru/wp-content/uploads/2018/12/proektirovanie-gostinic.jpg',
        deposit: 93704.00, description: 'Победитель торгов возмещает стоимость затрат на проведение аукциона согласно прейскуранту (https://torgi.gov.by/assets/docs/priceList/preyskurant.docx) от фактической цены продажи лота, которая списывается с суммы внесенного Победителем аукциона задатка. Оставшаяся сумма задатка засчитывается в счет оплаты предмета аукциона. Возмещение затрат по организации и проведению аукциона победитель осуществляет не позднее 5 рабочих дней с момента завершения торгов.  Дополнительная инф. +375293377226',
        request_start: '2022-06-20T09:00:54.578Z', request_end: '2022-07-07T17:00:54.578Z', auction_start: '2022-07-08T11:00:54.578Z', auction_end: ''
    },
    {   
        id: 2, category: 'estate', lot_number: 25164, initial_price: 973945.56, address: 'Горецкий район, г. Горки, ул. Мира, 53', name: 'Недвижимое имущество с оборудованием (Завод железобетонных изделий)', image: 'https://rezult.pro/wp-content/themes/rezult/img/factory.jpg',
        deposit: 97394.55, description: 'Завод железобетонных изделий, инвентарный номер 720/C-19507, площадью 1994,4кв.м., расположенный по адресу: Могилевская область, Горецкий район, г. Горки, ул. Мира, 53, стоимость 369 300 рублей, без НДС. - Растворно-бетонный узел (РБУ)',
        request_start: '2022-06-20T09:00:54.578Z', request_end: '2022-07-07T17:00:54.578Z', auction_start: '2022-07-08T11:00:54.578Z', auction_end: ''
    },
    {   
        id: 3, category: 'estate', lot_number: 25864, initial_price: 184700.00, address: 'г. Горки, ул. Мира, 53', name: 'Недвижимое имущество (эстакада с площадкой, здание сушилки, уборная, артезианская скважина, трансформаторная подстанция, бетонное покрытие, железобетонное ограждение)', image: 'https://xn--92-6kcaj2chwb1b5d.xn--p1ai/wp-content/uploads/2018/06/11_1.jpg',
        deposit: 18470.00, description: 'Победитель торгов возмещает стоимость затрат на проведение аукциона согласно прейскуранту (https://torgi.gov.by/assets/docs/priceList/preyskurant.docx) от фактической цены продажи лота, которая списывается с суммы внесенного Победителем аукциона задатка. Оставшаяся сумма задатка засчитывается в счет оплаты предмета аукциона. Также Покупатель обязуется оплатить возмещение затрат Продавца на организацию торгов. Затраты продавца на организацию и проведение электронных торгов составили: 1 089 рублей 58 копеек (1 083 рубля 87 копеек стоимость услуг по определению рыночной стоимости имущества, а так же 5 рублей 71 копейка стоимость публикаций в Едином государственном реестре сведений о банкротстве). Возмещение затрат по организации и проведению аукциона победитель осуществляет не позднее 5 рабочих дней с момента завершения торгов.',
        request_start: '2022-06-21T09:00:54.578Z', request_end: '2022-07-08T17:00:54.578Z', auction_start: '2022-07-09T11:00:54.578Z', auction_end: ''
    },
    {   
        id: 4, category: 'estate', lot_number: 25581, initial_price: 14696.00, address: 'Мостовский район, деревня Большие Степанишки ул.Школьная д.9', name: 'Библиотека - клуб', image: 'https://static.gdebar.ru/data/app/bar/img/gallery/3141/44033.jpg',
        deposit: 1469.00, description: 'Победитель торгов возмещает стоимость затрат на проведение аукциона согласно прейскуранту (https://torgi.gov.by/assets/docs/priceList/preyskurant.docx) от фактической цены продажи лота, которая списывается с суммы внесенного Победителем аукциона задатка. Оставшаяся сумма задатка засчитывается в счет оплаты предмета аукциона. Возмещение затрат по организации и проведению аукциона победитель осуществляет не позднее 5 рабочих дней с момента завершения торгов. ',
        request_start: '2022-06-21T09:00:54.578Z', request_end: '2022-07-08T17:00:54.578Z', auction_start: '2022-07-09T11:00:54.578Z', auction_end: ''
    },
    {   
        id: 5, category: 'estate', lot_number: 25164, initial_price: 973945.56, address: 'Горецкий район, г. Горки, ул. Мира, 53', name: 'Недвижимое имущество с оборудованием (Завод железобетонных изделий)', image: 'https://rezult.pro/wp-content/themes/rezult/img/factory.jpg',
        deposit: 97394.55, description: 'Завод железобетонных изделий, инвентарный номер 720/C-19507, площадью 1994,4кв.м., расположенный по адресу: Могилевская область, Горецкий район, г. Горки, ул. Мира, 53, стоимость 369 300 рублей, без НДС. - Растворно-бетонный узел (РБУ)',
        request_start: '2022-06-20T09:00:54.578Z', request_end: '2022-07-07T17:00:54.578Z', auction_start: '2022-07-08T11:00:54.578Z', auction_end: ''
    },
    {   
        id: 6, category: 'estate', lot_number: 25864, initial_price: 184700.00, address: 'г. Горки, ул. Мира, 53', name: 'Недвижимое имущество (эстакада с площадкой, здание сушилки, уборная, артезианская скважина, трансформаторная подстанция, бетонное покрытие, железобетонное ограждение)', image: 'https://xn--92-6kcaj2chwb1b5d.xn--p1ai/wp-content/uploads/2018/06/11_1.jpg',
        deposit: 18470.00, description: 'Победитель торгов возмещает стоимость затрат на проведение аукциона согласно прейскуранту (https://torgi.gov.by/assets/docs/priceList/preyskurant.docx) от фактической цены продажи лота, которая списывается с суммы внесенного Победителем аукциона задатка. Оставшаяся сумма задатка засчитывается в счет оплаты предмета аукциона. Также Покупатель обязуется оплатить возмещение затрат Продавца на организацию торгов. Затраты продавца на организацию и проведение электронных торгов составили: 1 089 рублей 58 копеек (1 083 рубля 87 копеек стоимость услуг по определению рыночной стоимости имущества, а так же 5 рублей 71 копейка стоимость публикаций в Едином государственном реестре сведений о банкротстве). Возмещение затрат по организации и проведению аукциона победитель осуществляет не позднее 5 рабочих дней с момента завершения торгов.',
        request_start: '2022-06-21T09:00:54.578Z', request_end: '2022-07-08T17:00:54.578Z', auction_start: '2022-07-09T11:00:54.578Z', auction_end: ''
    },
]

const transport = [
    {   
        id: 7, category: 'transport', lot_number: 25084, initial_price: 937040.00, address: 'Лидский район, Дубровенский с/с, д. Огородники, ул. Новая, 1В', name: 'Здание гостиницы, д. Огородники', image: 'https://v-grand.ru/wp-content/uploads/2018/12/proektirovanie-gostinic.jpg',
        deposit: 93704.00, description: 'Победитель торгов возмещает стоимость затрат на проведение аукциона согласно прейскуранту (https://torgi.gov.by/assets/docs/priceList/preyskurant.docx) от фактической цены продажи лота, которая списывается с суммы внесенного Победителем аукциона задатка. Оставшаяся сумма задатка засчитывается в счет оплаты предмета аукциона. Возмещение затрат по организации и проведению аукциона победитель осуществляет не позднее 5 рабочих дней с момента завершения торгов.  Дополнительная инф. +375293377226',
        request_start: '2022-06-20T09:00:54.578Z', request_end: '2022-07-07T17:00:54.578Z', auction_start: '2022-07-08T11:00:54.578Z', auction_end: ''
    },
    {   
        id: 8, category: 'transport', lot_number: 25164, initial_price: 973945.56, address: 'Горецкий район, г. Горки, ул. Мира, 53', name: 'Недвижимое имущество с оборудованием (Завод железобетонных изделий)', image: 'https://rezult.pro/wp-content/themes/rezult/img/factory.jpg',
        deposit: 97394.55, description: 'Завод железобетонных изделий, инвентарный номер 720/C-19507, площадью 1994,4кв.м., расположенный по адресу: Могилевская область, Горецкий район, г. Горки, ул. Мира, 53, стоимость 369 300 рублей, без НДС. - Растворно-бетонный узел (РБУ)',
        request_start: '2022-06-20T09:00:54.578Z', request_end: '2022-07-07T17:00:54.578Z', auction_start: '2022-07-08T11:00:54.578Z', auction_end: ''
    },
    {   
        id: 9, category: 'transport', lot_number: 25864, initial_price: 184700.00, address: 'г. Горки, ул. Мира, 53', name: 'Недвижимое имущество (эстакада с площадкой, здание сушилки, уборная, артезианская скважина, трансформаторная подстанция, бетонное покрытие, железобетонное ограждение)', image: 'https://xn--92-6kcaj2chwb1b5d.xn--p1ai/wp-content/uploads/2018/06/11_1.jpg',
        deposit: 18470.00, description: 'Победитель торгов возмещает стоимость затрат на проведение аукциона согласно прейскуранту (https://torgi.gov.by/assets/docs/priceList/preyskurant.docx) от фактической цены продажи лота, которая списывается с суммы внесенного Победителем аукциона задатка. Оставшаяся сумма задатка засчитывается в счет оплаты предмета аукциона. Также Покупатель обязуется оплатить возмещение затрат Продавца на организацию торгов. Затраты продавца на организацию и проведение электронных торгов составили: 1 089 рублей 58 копеек (1 083 рубля 87 копеек стоимость услуг по определению рыночной стоимости имущества, а так же 5 рублей 71 копейка стоимость публикаций в Едином государственном реестре сведений о банкротстве). Возмещение затрат по организации и проведению аукциона победитель осуществляет не позднее 5 рабочих дней с момента завершения торгов.',
        request_start: '2022-06-21T09:00:54.578Z', request_end: '2022-07-08T17:00:54.578Z', auction_start: '2022-07-09T11:00:54.578Z', auction_end: ''
    },
    {   
        id: 10, category: 'transport', lot_number: 25581, initial_price: 14696.00, address: 'Мостовский район, деревня Большие Степанишки ул.Школьная д.9', name: 'Библиотека - клуб', image: 'https://static.gdebar.ru/data/app/bar/img/gallery/3141/44033.jpg',
        deposit: 1469.00, description: 'Победитель торгов возмещает стоимость затрат на проведение аукциона согласно прейскуранту (https://torgi.gov.by/assets/docs/priceList/preyskurant.docx) от фактической цены продажи лота, которая списывается с суммы внесенного Победителем аукциона задатка. Оставшаяся сумма задатка засчитывается в счет оплаты предмета аукциона. Возмещение затрат по организации и проведению аукциона победитель осуществляет не позднее 5 рабочих дней с момента завершения торгов. ',
        request_start: '2022-06-21T09:00:54.578Z', request_end: '2022-07-08T17:00:54.578Z', auction_start: '2022-07-09T11:00:54.578Z', auction_end: ''
    },
]

const equipment = [
    {   
        id: 11, category: 'equipment', lot_number: 25084, initial_price: 937040.00, address: 'Лидский район, Дубровенский с/с, д. Огородники, ул. Новая, 1В', name: 'Здание гостиницы, д. Огородники', image: 'https://v-grand.ru/wp-content/uploads/2018/12/proektirovanie-gostinic.jpg',
        deposit: 93704.00, description: 'Победитель торгов возмещает стоимость затрат на проведение аукциона согласно прейскуранту (https://torgi.gov.by/assets/docs/priceList/preyskurant.docx) от фактической цены продажи лота, которая списывается с суммы внесенного Победителем аукциона задатка. Оставшаяся сумма задатка засчитывается в счет оплаты предмета аукциона. Возмещение затрат по организации и проведению аукциона победитель осуществляет не позднее 5 рабочих дней с момента завершения торгов.  Дополнительная инф. +375293377226',
        request_start: '2022-06-20T09:00:54.578Z', request_end: '2022-07-07T17:00:54.578Z', auction_start: '2022-07-08T11:00:54.578Z', auction_end: ''
    },
    {   
        id: 12, category: 'equipment', lot_number: 25164, initial_price: 973945.56, address: 'Горецкий район, г. Горки, ул. Мира, 53', name: 'Недвижимое имущество с оборудованием (Завод железобетонных изделий)', image: 'https://rezult.pro/wp-content/themes/rezult/img/factory.jpg',
        deposit: 97394.55, description: 'Завод железобетонных изделий, инвентарный номер 720/C-19507, площадью 1994,4кв.м., расположенный по адресу: Могилевская область, Горецкий район, г. Горки, ул. Мира, 53, стоимость 369 300 рублей, без НДС. - Растворно-бетонный узел (РБУ)',
        request_start: '2022-06-20T09:00:54.578Z', request_end: '2022-07-07T17:00:54.578Z', auction_start: '2022-07-08T11:00:54.578Z', auction_end: ''
    },
    {   
        id: 13, category: 'equipment', lot_number: 25864, initial_price: 184700.00, address: 'г. Горки, ул. Мира, 53', name: 'Недвижимое имущество (эстакада с площадкой, здание сушилки, уборная, артезианская скважина, трансформаторная подстанция, бетонное покрытие, железобетонное ограждение)', image: 'https://xn--92-6kcaj2chwb1b5d.xn--p1ai/wp-content/uploads/2018/06/11_1.jpg',
        deposit: 18470.00, description: 'Победитель торгов возмещает стоимость затрат на проведение аукциона согласно прейскуранту (https://torgi.gov.by/assets/docs/priceList/preyskurant.docx) от фактической цены продажи лота, которая списывается с суммы внесенного Победителем аукциона задатка. Оставшаяся сумма задатка засчитывается в счет оплаты предмета аукциона. Также Покупатель обязуется оплатить возмещение затрат Продавца на организацию торгов. Затраты продавца на организацию и проведение электронных торгов составили: 1 089 рублей 58 копеек (1 083 рубля 87 копеек стоимость услуг по определению рыночной стоимости имущества, а так же 5 рублей 71 копейка стоимость публикаций в Едином государственном реестре сведений о банкротстве). Возмещение затрат по организации и проведению аукциона победитель осуществляет не позднее 5 рабочих дней с момента завершения торгов.',
        request_start: '2022-06-21T09:00:54.578Z', request_end: '2022-07-08T17:00:54.578Z', auction_start: '2022-07-09T11:00:54.578Z', auction_end: ''
    },
    {   
        id: 14, category: 'equipment', lot_number: 25581, initial_price: 14696.00, address: 'Мостовский район, деревня Большие Степанишки ул.Школьная д.9', name: 'Библиотека - клуб', image: 'https://static.gdebar.ru/data/app/bar/img/gallery/3141/44033.jpg',
        deposit: 1469.00, description: 'Победитель торгов возмещает стоимость затрат на проведение аукциона согласно прейскуранту (https://torgi.gov.by/assets/docs/priceList/preyskurant.docx) от фактической цены продажи лота, которая списывается с суммы внесенного Победителем аукциона задатка. Оставшаяся сумма задатка засчитывается в счет оплаты предмета аукциона. Возмещение затрат по организации и проведению аукциона победитель осуществляет не позднее 5 рабочих дней с момента завершения торгов. ',
        request_start: '2022-06-21T09:00:54.578Z', request_end: '2022-07-08T17:00:54.578Z', auction_start: '2022-07-09T11:00:54.578Z', auction_end: ''
    },
    {   
        id: 15, category: 'equipment', lot_number: 25864, initial_price: 184700.00, address: 'г. Горки, ул. Мира, 53', name: 'Недвижимое имущество (эстакада с площадкой, здание сушилки, уборная, артезианская скважина, трансформаторная подстанция, бетонное покрытие, железобетонное ограждение)', image: 'https://xn--92-6kcaj2chwb1b5d.xn--p1ai/wp-content/uploads/2018/06/11_1.jpg',
        deposit: 18470.00, description: 'Победитель торгов возмещает стоимость затрат на проведение аукциона согласно прейскуранту (https://torgi.gov.by/assets/docs/priceList/preyskurant.docx) от фактической цены продажи лота, которая списывается с суммы внесенного Победителем аукциона задатка. Оставшаяся сумма задатка засчитывается в счет оплаты предмета аукциона. Также Покупатель обязуется оплатить возмещение затрат Продавца на организацию торгов. Затраты продавца на организацию и проведение электронных торгов составили: 1 089 рублей 58 копеек (1 083 рубля 87 копеек стоимость услуг по определению рыночной стоимости имущества, а так же 5 рублей 71 копейка стоимость публикаций в Едином государственном реестре сведений о банкротстве). Возмещение затрат по организации и проведению аукциона победитель осуществляет не позднее 5 рабочих дней с момента завершения торгов.',
        request_start: '2022-06-21T09:00:54.578Z', request_end: '2022-07-08T17:00:54.578Z', auction_start: '2022-07-09T11:00:54.578Z', auction_end: ''
    },
]

const all = [...estate, ...transport, ...equipment]

const news = [
    { id: 1, category: 'Обучение', date: '2022-07-02T11:50:54.578Z', name: "ИПКиПК Белорусско-Российского университета формирует группу слушателей по программе повышения квалификации управляющих с 13.06.2022", description: 'Институт повышения квалификации и переподготовки кадров Белорусско-Российского университета формирует группу слушателей по программе повышение квалификации временных (антикризисных) управляющих с использованием информационно-коммуникационных технологий. Срок обучения – 5 дней: с 13 по 17 июня 2022 г. Стоимость – 204,00 рубля. При оформлении предоставляются копии 30-32 страниц паспорта и  диплома о высшем образовании.По окончании выдаётся свидетельство установленного образца. По вопросам участия в программе следует обращаться в университет по адресу: 212000, г. Могилев, проспект Мира, 43, ИПК, каб.420, тел/факс (80222) 60-08-30, моб.тел. +375 29 631-80-96. Контактное лицо Силин Руслан Владимирович.' },
    { id: 2, category: 'Обучение', date: '2022-07-02T18:32:45.578Z', name: "МИПК и ПК БНТУ объявляет набор слушателей в группу по подготовке временных (антикризисных) управляющих с 22.08.2022", description: 'Межотраслевой институт повышения квалификации и переподготовки кадров по менеджменту и развитию персонала БНТУ объявляет набор на обучающие курсы «Подготовка временных (антикризисных) управляющих». Начало обучения 22 августа 2022 года, срок получения образования – 2,5 месяца, форма обучения вечерняя с 17.00, аудиторные занятия чередуются с занятиями онлайн с применением информационно-коммуникационных технологий, которые проводят высококвалифицированные преподаватели-практики, судьи Экономического суда, действующие антикризисные управляющие категории «С» с многолетним опытом работы в процедурах ликвидации, аттестованные специалисты рынка ценных бумаг, судебно-экономические эксперты, аудиторы. Каждому слушателю предоставляется доступ на учебный сайт, на котором размещены учебные материалы для подготовки к прохождению собеседования на аттестат. Ориентировочная стоимость обучения – 1100 белорусских рублей (оплата в три этапа). Контактные телефоны: 8(017) 375 83 30, 8(017) 343 57 08, +375 29 614 50 34 e-mail:ftl@mipk.by.' },
    { id: 3, category: 'Обучение', date: '2022-06-02T13:20:45.578Z', name: "УО БИП – Университет права и социально-информационных технологий начинает обучение по программе повышение квалификации с 27.06.2022", description: 'УО «БИП – Университет права и социально-информационных технологий» Факультет повышения квалификации и переподготовки объявляет набор слушателей в группу обязательного повышения квалификации действующих антикризисных управляющих. Повышение квалификации осуществляется на основании образовательной программы, утвержденной Департаментом по санации и банкротству Министерства экономики Республики Беларусь. Начало занятий – 27 июня 2022 года. Срок получения образования – 5 дней (36 академических часов). Форма получения образования – вечерняя с 16.00 до 21.50. Занятия проводятся по адресу: ул. Октябрьская, 5 (Концертный зал «Минск»). Стоимость обучения составляет 220 (двести двадцать) белорусских рублей. Практико-ориентированный образовательный процесс осуществляет высококвалифицированный профессорско-преподавательский состав Университета и сотрудники Департамента по санации и банкротству Министерства экономики Республики Беларусь, члены Ассоциации по антикризисному управлению и банкротству, аттестованные специалисты рынка ценных бумаг, эксперты-оценщики, аудиторы, судьи общего суда и Экономического суда, практикующие юристы и действующие антикризисные управляющие. Обучение проводится в форме лекционных и практических занятий, тренинга, деловой игры с моделированием проблемных ситуаций. В рамках образовательной программы запланировано проведение «круглого стола» по теме «Актуальные вопросы практической деятельности управляющих в процедурах экономической несостоятельности (банкротства)». По результатам обучения выдается свидетельство о повышении квалификации установленного образца, которое является основанием для прохождения переаттестации (продления действия аттестата антикризисного управляющего) в Департаменте по санации и банкротству Министерства экономики Республики Беларусь. Прием заявок осуществляется до 25 июня 2022 года. Координатор образовательной программы подготовки временных (антикризисных) управляющих Мазуркевич Татьяна Валерьевна, контактный телефон – 8(029) 638 15 99 А1. Телефоны для справок: 8(017)348 40 53; 8(029)603 01 76 А1. Официальный сайт: https://bip-ip.by/,  е-mail: fp-bip@mail.ru.' },
    { id: 4, category: 'Обучение', date: '2022-06-02T09:15:45.578Z', name: "УО БТЭУПК г.Гомель организует обучение по программам повышения квалификации с 26.09.2022 и подготовки управляющих с 03.10.2022", description: 'УО «БЕЛОРУССКИЙ ТОРГОВО-ЭКОНОМИЧЕСКИЙ УНИВЕРСИТЕТ ПОТРЕБИТЕЛЬСКОЙ КООПЕРАЦИИ" организует обучение: 1.По программе повышения квалификации для руководящих работников и специалистов организаций и антикризисных управляющих по тематике «Совершенствование деятельности антикризисных управляющих в условиях новых интеграционных взаимодействий антикризисного характера» с 26 сентября 2022 года. Занятия будут проходить при помощи мобильного приложения Jitsi Meet с использованием смартфона или ПК. Стоимость обучения ориентировочно будет составлять 227 рублей. 2. Обучающих курсов по Программе подготовки временных (антикризисных) управляющих с 03.10.2022 по 6.01.2023 в очной (дневной) форме получения образования с использованием мобильного приложения Jitsi Meet и системы дистанционного обучения на платформе Moodle. Занятия будут проходить с 16-30 до 21.00 с использованием смартфона или ПК. Стоимость обучения ориентировочно будет составлять 975 рублей. Контактные  телефоны: 8(0232) 500318 - Коробкин Анатолий Зиновьевич, +375 29 152 2161- Гердт Ирина Николаевна.' }, 
    { id: 5, category: 'Аттестация', date: '2022-06-02T08:03:45.578Z', name: "Список лиц для прохождения аттестационного экзамена 02.06.2022", description: '02.06.2022 года с 10.30 до 12.30 Департаментом по санации и банкротству Минэкономики  будет проводиться аттестационный экзамен (в формате online) на получение аттестата временного (антикризисного) управляющего. Ссылка для входа: https://ivcs.g-cloud.by/#join:t2e482e6b-0bea-41bb-a1bc-e10c8f18d86d. Ссылка для подключения будет доступна 02.06.2022 с 9-00. При входе необходимо указать свое имя  на вкладке «Я не зарегистрированный пользователь» и нажать кнопку «Войти в мероприятие», после чего Вы будете направлены в «Комнату ожидания». В дальнейшем организатор мероприятия допустит Вас принять участие в аттестационном экзамене. Обращаем Ваше внимание, что подключение необходимо производить с использованием персонального компьютера(программное обеспечение не поддерживает использование мобильных телефонов (смартфонов)). Вы должны зарегистрироваться до 10.00 и ожидать допуска с 10.20 до 12.30 у персонального компьютера. В случае Вашего отсутствия в «комнате ожидания» или невозможности обеспечения подключения после направления Вам  модератором разрешения для принятия участия в аттестационном экзамене, модератор  исключит Вас из нижеприведенного списка лиц для прохождения  аттестационного экзамена. При этом возможность повторного соединения с Вами в течение проводимого аттестационного экзамена будет исключена. Для пробного подключения Вам необходимо связаться 01.06.2022 с 14.00 до 16.00 со службой технической поддержки по тел. 215 32 14 (Владислав Витольдович).' }, 
    { id: 6, category: 'Законодательство', date: '2022-05-02T09:30:45.578Z', name: 'О соблюдении очередности удовлетворения требований кредиторов', description: 'Временным (антикризисным) управляющим. <br/ > В связи с поступающими в адрес Департамента по санации и банкротству Минэкономики Республики Беларусь письмами о нарушении управляющими очередности удовлетворения требований кредиторов сообщаем следующее. В соответствии со статьями 137, 141, 147 Закона Республики Беларусь «Об экономической несостоятельности (банкротстве)» (далее - Закон) погашение требований кредиторов производится в очередности, установленной Законом и отраженной в реестре требований кредиторов, который формирует антикризисный управляющий. В соответствии со статьями 141, 147 Закона вне очереди подлежат возмещению судебные расходы и расходы на публикацию сведений, предусмотренных настоящим Законом, а также производятся расчеты по обязательствам должника, возникшим после открытия конкурсного производства, в том числе по уплате налогов, сборов (пошлин) и иных платежей в республиканский и местные бюджеты, включая государственные целевые бюджетные фонды. Требования кредиторов каждой следующей очереди удовлетворяются после полного удовлетворения требований кредиторов предыдущей очереди. В связи с вышеизложенным указываем на недопустимость нарушения очередности удовлетворения требований кредиторов, предусмотренной статьей 147 Закона.' }, 
    { id: 7, category: 'Обучение', date: '2022-05-02T10:22:45.578Z', name: 'В Могилевском филиале УО БИП-Университет права и социально-информационных технологий с 01.06.2022 обучение антикризисных управляющих', description: 'Могилевский филиал УО "БИП-Университет права и социально-информационных технологий" объявляет с 01.06.2022 набор слушателей по программе подготовки временных (антикризисных) управляющих. Продолжительность обучения 2,5 месяца с использованием информационно-коммуникационного ресурса Zoom и системы дистанционного обучения БИП на платформе Moodle. Стоимость 770.00 рублей. По результатам обучения выдается справка государственного образца, которая является основанием для прохождения аттестации в Департаменте по санации и банкротству Министерства экономики Республики Беларусь и получения аттестата временного антикризисного управляющего. По вопросам участия в программе следует обращаться в Могилевский филиал Учреждения образования «БИП-Университет права и социально-информационных технологий» по адресу: 212030 г. Могилев, ул. Комсомольская, д. 5. Тел./факс (80222) 782042. Сайт http://mogilev.bip-ip.by. Контактное лицо Мякинькая Виолетта Викторовна, моб. тел. +375 29 3483983.' }, 
    { id: 8, category: 'Обучение', date: '2022-05-02T00:47:45.578Z', name: 'Подготовка и повышение квалификации антикризисных управляющих в г. Минске с 25.04.2022 и 16.05.2022 в БНТУ', description: 'Филиал БНТУ «Межотраслевой институт повышения квалификации и переподготовки кадров по менеджменту и развитию персонала БНТУ» объявляет набор на обучающие курсы «Подготовка временных (антикризисных) управляющих». Начало обучения 25 апреля 2022 года, срок получения образования – 2,5 месяца, форма обучения вечерняя с 17.00, аудиторные занятия чередуются с занятиями онлайн с применением информационно-коммуникационных технологий, которые проводят высококвалифицированные преподаватели-практики, судьи экономического суда, действующие антикризисные управляющие категории «С» с многолетним опытом работы в процедурах ликвидации, аттестованные специалисты рынка ценных бумаг, судебно-экономические эксперты, аудиторы. Подготовка осуществляется на основании образовательной программы, утвержденной Департаментом по санации и банкротству Министерства экономики Республики Беларусь. Каждому слушателю предоставляется доступ на учебный сайт, на котором размещены учебные материалы для подготовки к прохождению собеседования на аттестат. Ориентировочная стоимость обучения – 1100 белорусских рублей (оплата в три этапа). А также 16.05.2022 планирует начать дистанционное обучение по программе повышения квалификации «Совершенствование деятельности антикризисных управляющих в условиях новых интеграционных взаимодействий антикризисного характера». Программа обучения рассчитана на 36 часов. Ориентировочная стоимость обучения- 230 белорусских рублей. Контактные телефоны: 8(017) 375 83 30, 8(017) 343 57 08, +375 29 614 50 34 e-mail:ftl@mipk.by.' }, 
    { id: 9, category: 'Обучение', date: '2022-05-02T01:50:54.578Z', name: "ИПКиПК Белорусско-Российского университета формирует группу слушателей по программе повышения квалификации управляющих с 13.06.2022", description: 'Институт повышения квалификации и переподготовки кадров Белорусско-Российского университета формирует группу слушателей по программе повышение квалификации временных (антикризисных) управляющих с использованием информационно-коммуникационных технологий. Срок обучения – 5 дней: с 13 по 17 июня 2022 г. Стоимость – 204,00 рубля. При оформлении предоставляются копии 30-32 страниц паспорта и  диплома о высшем образовании.По окончании выдаётся свидетельство установленного образца. По вопросам участия в программе следует обращаться в университет по адресу: 212000, г. Могилев, проспект Мира, 43, ИПК, каб.420, тел/факс (80222) 60-08-30, моб.тел. +375 29 631-80-96. Контактное лицо Силин Руслан Владимирович.' },
    { id: 10, category: 'Обучение', date: '2022-04-02T02:32:45.578Z', name: "МИПК и ПК БНТУ объявляет набор слушателей в группу по подготовке временных (антикризисных) управляющих с 22.08.2022", description: 'Межотраслевой институт повышения квалификации и переподготовки кадров по менеджменту и развитию персонала БНТУ объявляет набор на обучающие курсы «Подготовка временных (антикризисных) управляющих». Начало обучения 22 августа 2022 года, срок получения образования – 2,5 месяца, форма обучения вечерняя с 17.00, аудиторные занятия чередуются с занятиями онлайн с применением информационно-коммуникационных технологий, которые проводят высококвалифицированные преподаватели-практики, судьи Экономического суда, действующие антикризисные управляющие категории «С» с многолетним опытом работы в процедурах ликвидации, аттестованные специалисты рынка ценных бумаг, судебно-экономические эксперты, аудиторы. Каждому слушателю предоставляется доступ на учебный сайт, на котором размещены учебные материалы для подготовки к прохождению собеседования на аттестат. Ориентировочная стоимость обучения – 1100 белорусских рублей (оплата в три этапа). Контактные телефоны: 8(017) 375 83 30, 8(017) 343 57 08, +375 29 614 50 34 e-mail:ftl@mipk.by.' },
    { id: 11, category: 'Обучение', date: '2022-04-02T03:20:45.578Z', name: "УО БИП – Университет права и социально-информационных технологий начинает обучение по программе повышение квалификации с 27.06.2022", description: 'УО «БИП – Университет права и социально-информационных технологий» Факультет повышения квалификации и переподготовки объявляет набор слушателей в группу обязательного повышения квалификации действующих антикризисных управляющих. Повышение квалификации осуществляется на основании образовательной программы, утвержденной Департаментом по санации и банкротству Министерства экономики Республики Беларусь. Начало занятий – 27 июня 2022 года. Срок получения образования – 5 дней (36 академических часов). Форма получения образования – вечерняя с 16.00 до 21.50. Занятия проводятся по адресу: ул. Октябрьская, 5 (Концертный зал «Минск»). Стоимость обучения составляет 220 (двести двадцать) белорусских рублей. Практико-ориентированный образовательный процесс осуществляет высококвалифицированный профессорско-преподавательский состав Университета и сотрудники Департамента по санации и банкротству Министерства экономики Республики Беларусь, члены Ассоциации по антикризисному управлению и банкротству, аттестованные специалисты рынка ценных бумаг, эксперты-оценщики, аудиторы, судьи общего суда и Экономического суда, практикующие юристы и действующие антикризисные управляющие. Обучение проводится в форме лекционных и практических занятий, тренинга, деловой игры с моделированием проблемных ситуаций. В рамках образовательной программы запланировано проведение «круглого стола» по теме «Актуальные вопросы практической деятельности управляющих в процедурах экономической несостоятельности (банкротства)». По результатам обучения выдается свидетельство о повышении квалификации установленного образца, которое является основанием для прохождения переаттестации (продления действия аттестата антикризисного управляющего) в Департаменте по санации и банкротству Министерства экономики Республики Беларусь. Прием заявок осуществляется до 25 июня 2022 года. Координатор образовательной программы подготовки временных (антикризисных) управляющих Мазуркевич Татьяна Валерьевна, контактный телефон – 8(029) 638 15 99 А1. Телефоны для справок: 8(017)348 40 53; 8(029)603 01 76 А1. Официальный сайт: https://bip-ip.by/,  е-mail: fp-bip@mail.ru.' },
]