// Необходимо написать функцию, которая выполняет асинхронный запрос к некоторому API 
// (например, имитируя запрос с использованием fetch или другого метода). 
// Функция должна корректно обрабатывать ошибки, которые могут возникнуть при выполнении запроса. 
// В случае успеха она должна вернуть данные, а в случае ошибки — вывести сообщение об ошибке.
// Создание асинхронной функции:
// Функция должна быть асинхронной и использовать try-catch для обработки ошибок.
// Выполнение асинхронного запроса:
// Используйте метод fetch() или любой другой механизм асинхронных запросов для получения данных.
// Внутри функции с помощью await нужно ожидать результат запроса.
// Обработка ошибок:
// Если запрос выполнен успешно, функция должна вернуть результат (например, данные в формате JSON).
// Если возникает ошибка (например, проблема с сетью или неправильный ответ от сервера), нужно перехватить ошибку в блоке catch 
// и вывести сообщение об ошибке (например, "Ошибка при загрузке данных").

const fetchCatData = async (): Promise<Object | unknown> => {
    try {
        const response = await fetch("https://cat-fact.herokuapp.com/facts");
        if (!response.ok) throw Error('Ошибка со стороны сервера');
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(`Ошибка: ${error}`);
        return error;
    }
}

fetchCatData()
    .then((res) => console.log(res))
    .catch((error) => console.error(error))
