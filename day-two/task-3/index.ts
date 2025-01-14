// Нужно написать функцию createBook, которая будет принимать три параметра: 
// название книги (title), год публикации (year) и автора книги (author). 
// В ответ она должна создавать объект с тремя переданными свойствами, а также двумя дополнительными свойствами:
// preview — строка, состоящая из названия книги, автора и года публикации в формате: "Название: [title], Автор: [author], Год: [year]".
// url — строка URL, которая будет ссылаться на страницу с превью книги, и она должна иметь следующий формат: www.someurl.com/preview?title=[title]&year=[year]&author=[author].
// Функция createBook принимает три параметра: title, year, author.
// Создает объект с ключами:
// title — присваивается значение параметра title.
// year — присваивается значение параметра year.
// author — присваивается значение параметра author.
// preview — формируется строка, которая объединяет title, author и year в формат: "Название: [title], Автор: [author], Год: [year]".
// url — формируется строка с URL в формате: www.someurl.com/preview?title=[title]&year=[year]&author=[author].
// Функция возвращает созданный объект.

type SourceData = {
    title: string,
    year: number,
    author: string
}

function createBook(bookData: SourceData): object {
    return {
        title: bookData.title,
        year: bookData.year,
        author: bookData.author,
        preview: `Название: ${bookData.title}, Автор: ${bookData.author}, Год: ${bookData.year}`,
        url: new URL(`https://www.someurl.com/preview?title=${bookData.title}&year=${bookData.year}&author=${bookData.author}`)
    };
}

console.log(createBook(
    {
        title: 'Three Musketeers',
        year: 1844,
        author: 'Aleksandr Dyuma'
    }
))