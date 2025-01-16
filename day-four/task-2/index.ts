// Дано n объектов одного типа
type UserWithGadgetType = {
    id: string,
    name: string,
    gadget: {
        id: string,
        name: string,
        price: string | undefined
    }
}[]

// Ваша задача привести весь массив объектов типа userWithGadget[] к типу userWithGadgets. 
// То есть, необходимо сгруппировать гаджеты по их владельцам, чтобы в итоговом массиве каждому пользователю соответствовал список всех его гаджетов.

interface IUserWithGadgets {
    id: string,
    name: string,
    gadgets: {
        id: string,
        name: string,
        price: string | undefined
    }[]
}

const input: UserWithGadgetType = [
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: { id: "101", name: "Phone", price: "1000" },
    },
    {
        id: "2",
        name: "Khidir Karawita",
        gadget: { id: "102", name: "Tablet", price: undefined },
    },
    {
        id: "1",
        name: "Khalid Kashmiri333",
        gadget: { id: "103", name: "Laptop", price: "1500" },
    },
];

const groupUsersGadgets = (users: UserWithGadgetType) => {
    // Теперь используем мапу, ибо в ходе написания понял, что есть удобные методы, по типу set, has
    const userMap = new Map();

    for (let user of users) {
        // Извлечем из юзера данные
        const {id, name, gadget} = user;
        // Проверяем, есть ли в мапе юзер с таким ключом (айди также в этом случае)
        if (!userMap.has(id)) {
            // В случае отсутствия закидываем юзера в мапу с этим ключом, и меняем соответственно структуру, добавляя лишь gadgets
            userMap.set(id, { id, name, gadgets: [] });
        }
        // Далее добавляем в массив гаджетов непосредственно гаджет
        userMap.get(id)!.gadgets.push(gadget);
    }

    // Не совсем ожидаемое использование спред-оператора, однако код выше выглядит наиболее лаконично, нежели предыдущий
    return [...userMap.values()];
}

console.log(groupUsersGadgets(input))