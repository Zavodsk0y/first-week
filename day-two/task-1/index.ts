// Условие:
// Напишите функцию countFilledValues, которая принимает на вход объект с произвольными ключами и значениями. 
// Функция должна вернуть количество заполненных значений в объекте. Заполненным значением считается любое значение, которое:
// Не является null,
// Не является undefined,
// Не является пустой строкой ("").

// объект data
const data = {
	name: "Alice",
	age: 25,
	address: "",
	phone: undefined,
	email: "[alice@example.com](<mailto:alice@example.com>)",
	notes: null,
    author: "Aleksandr Dyuma",
    berari: undefined,
    birthOfDate: "24-07-1802",
    books: {
        first: "Three Musketeers",
        second: "The Count of Monte Cristo"
    }
};


// реализация функции
const countFilledValues = (obj: Record<string, unknown>) => {
    let counter = 0;
    for (let key in obj) {
        // != одновременно позволит проверить на null & undefined, не прибегая к дополнительному прописыванию строгих сравнений
        if (obj[key] != null && obj[key] !== "") {
            counter += 1;
        }
    }

    return counter;
}

// вывод в консоль
console.log(countFilledValues(data)) // 6