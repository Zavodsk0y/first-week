// Иногда на этапе разработки frontend приложения приходится использовать фейковый API, 
// который будет имитировать реальный запрос к серверу. Этот фейковый API должен возвращать данные через некоторую задержку, 
// как будто данные загружаются с реального сервера. В будущем этот фейковый API будет заменен реальным запросом к серверу. 
// Для этого нужно создать функцию, которая будет выполнять Promise, имитируя задержку, как при реальном запросе с использованием fetch.
// Создание фейковой функции:
// Функция должна имитировать асинхронный запрос с использованием fetch. Вместо реального запроса, она будет использовать setTimeout, чтобы вернуть данные через некоторое время.
// Использование Promise:
// Функция должна возвращать Promise, который будет резолвиться (успешно завершаться) через заранее заданное время (например, 2 секунды).
// Задержка и возвращение данных:
// Через setTimeout будет имитироваться задержка.
// После задержки функция должна вернуть заранее подготовленные данные (например, объект или массив), как если бы данные были получены с реального сервера.
// Формат данных:
// Для тестирования можно использовать любой формат данных(желательно чтоб это был хотя бы массив), например, массив объектов с информацией о пользователях или постах.

type UUID = string

type UsersType = {
    id: UUID,
    name: string,
    phone: string,
    email: string,
    location: string,
    status: "active" | "delete",
}[]

const users: UsersType = [
    {
        id: "20594add-9139-4e5a-a30d-99fec4420795",
        name: "Aleksandr",
        phone: "+79122907183",
        email: "alex@mail.ru",
        location: "Tomsk",
        status: "active"
    },
    {
        id: "c4c396b4-f8e7-4432-b1a5-4be1eb29dbf9",
        name: "Oleg",
        phone: "+79124355287",
        email: "oleg@mail.ru",
        location: "Tomsk",
        status: "delete"
    },
    {
        id: "382fbac0-f501-4ba5-a670-298f679856e7",
        name: "Maria",
        phone: "+79121754467",
        email: "maria@mail.ru",
        location: "Helsinki",
        status: "active"
    },
    {
        id: "6a509f0b-f667-4580-bd55-7f3894ad1b6d",
        name: "Egor",
        phone: "+79124702015",
        email: "egor@mail.ru",
        location: "Tomsk",
        status: "active"
    },
    {
        id: "4d248a61-f8e7-462d-a5a5-8aebe4014368",
        name: "Pavel",
        phone: "+79124305099",
        email: "pavel@mail.ru",
        location: "Tomsk",
        status: "delete"
    },
]

const getUsers = async (users: UsersType) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(users), 3000)
    })
    .then((res) => {
        console.log(res)
    }) 
}

getUsers(users)
