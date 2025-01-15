// Напишите асинхронную функцию cleanUserData(users), которая принимает массив пользователей и возвращает новый массив пользователей с такими условиями:
// Имена пользователей (name) приведены к нижнему регистру и обрезаны от лишних пробелов.
// Emails (email) приведены к нижнему регистру.
// В новый массив включаются только пользователи, у которых свойство isActive равно true.
// С вероятностью 10% выбрасывается ошибка, которую необходимо обработать.
// Алгоритм:
// Определите функцию cleanUserData, которая принимает массив объектов users.
// Создайте внутри функции обработку случайной ошибки (например, на основе генерации случайного числа).
// Отфильтруйте массив, чтобы включить только пользователей с isActive: true.
// Для каждого пользователя обработайте поля:
// Приведите name к нижнему регистру и удалите лишние пробелы.
// Приведите email к нижнему регистру.
// Верните обновленный массив.
// Оберните вызов функции в try-catch, чтобы обработать потенциальную ошибку.

const usersData = [
    {
        id: "20594add-9139-4e5a-a30d-99fec4420795",
        name: " Aleksandr",
        phone: "+79122907183",
        email: "Alex@mail.ru",
        location: "Tomsk",
        isActive: true
    },
    {
        id: "c4c396b4-f8e7-4432-b1a5-4be1eb29dbf9",
        name: "Oleg  ",
        phone: "+79124355287",
        email: "Oleg@mail.ru",
        location: "Tomsk",
        isActive: false
    },
    {
        id: "382fbac0-f501-4ba5-a670-298f679856e7",
        name: "  Maria  ",
        phone: "+79121754467",
        email: "Maria@mail.ru",
        location: "Helsinki",
        isActive: true
    },
    {
        id: "6a509f0b-f667-4580-bd55-7f3894ad1b6d",
        name: " Egor ",
        phone: "+79124702015",
        email: "Egor@mail.ru",
        location: "Tomsk",
        isActive: true
    },
    {
        id: "4d248a61-f8e7-462d-a5a5-8aebe4014368",
        name: "Pavel",
        phone: "+79124305099",
        email: "Pavel@mail.ru",
        location: "Tomsk",
        isActive: false
    },
]

const cleanUserData = async (users: typeof usersData): Promise<Object[] | unknown> => {
    try {
        const random = Math.floor(Math.random() * 100) + 1
        if (random <= 10) throw Error("Что-то пошло не так...")
        const activeUsers = users.filter(user => user.isActive === true)
            .map(user => ({
                ...user,
                name: user.name.trim().toLowerCase(),
                email: user.email.toLowerCase()
            }))
        // Либо:
        // activeUsers.forEach(user => {
        //     user.name = user.name.trim().toLowerCase();
        //     user.email = user.email.toLowerCase();
        // })
        return activeUsers;
    } catch (error) {
        return error;
    }
}

cleanUserData(usersData)
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.error(error)
    })