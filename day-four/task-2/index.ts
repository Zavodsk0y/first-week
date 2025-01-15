// Дано n объектов одного типа
type UserWithGadget = {
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

interface UserWithGadgets {
	id: string,
	name: string,
	gadgets: {
		id: string,
		name: string,
		price: string | undefined
	}[]
}

const input: UserWithGadget = [
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

// Пробовал ковырять reduce, но в итоге всего этого решил вернуться к простым циклам
const groupUsersGadgets = (users: UserWithGadget): UserWithGadgets[] => {
    const grouped: Record<string, UserWithGadgets> = {}
    for(let user of users) {
        // Здесь чутка "херим", добавляя лишние ключи по айдишнику, по типу "1" и т.д.
        if (!grouped[user.id]) {
            grouped[user.id] = {
                // Спредом в этом случае не воспользуюсь, так как гаджет будет закидываться
                id: user.id,
                name: user.name,
                gadgets: [user.gadget]
            }
        } else {
            // Если пользователь с таким ключом/айди уже есть, то просто запушим с него гаджет туда
            grouped[user.id].gadgets.push(user.gadget)
        }
    }
    // При помощи Object.values() избавимся от "1", "2", лишних значений, которые не должны присутствовать в выводе
    return Object.values(grouped)
}

console.log(groupUsersGadgets(input))