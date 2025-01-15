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

type UUID = `${string}-${string}-${string}-${string}-${string}`

interface UsersType {
    id: UUID,
    name: string,
    phone: string,
    email: string,
    location: string,
    status: "active" | "delete",
}

type IGetDataDto = UsersType[]

const names = [
    " Betty  ", " Mitchell ", " Guadalupe ", " Patricia ", " Kristi ", " Sydney ", " Kaitlin ", " Jeanne ", " Jamel ", " Warren ",
    " Beau ", " Orlando ", " Arnulfo ", " Olin ", " Marla ", " Guillermo ", " Lindsey ", " Ida ", " Felipe ", " Derek ",
    " Arlene ", " Jerry ", " Wilda ", " Phil ", " Brooke ", " Franklin ", " Deidre ", " Eunice ", " Angel ", " Kathrine ",
]

const generateEmail = (name: string): string => {
    const id = Math.random().toString().slice(3,5);
    return `${name}${id}@mail.ru`;
}

const generateUserData = (): IGetDataDto => {
    const quantity = Math.floor(Math.random() * 10) + 1;
    let users: IGetDataDto = [];
    for (let i = 0; i < quantity; i++) {
        const randomName = names[Math.floor(Math.random() * names.length)].trim();
        const randomStatus: "active" | "delete" = Math.random() < 0.5 ? "active" : "delete";
        users.push({
                id: self.crypto.randomUUID(),
                name: randomName,
                phone: `+${Math.random().toString().slice(2, 11)}`,
                email: generateEmail(randomName),
                location: "Tomsk",
                status: randomStatus
        })
    }
    return users;
}

const getUsers = async (): Promise<IGetDataDto> => {
    const usersData = generateUserData();
    return new Promise(resolve => {
        setTimeout(() => resolve(usersData), 5000)
    })
}

getUsers()
    .then((res) => {
        console.log(res)
    })
