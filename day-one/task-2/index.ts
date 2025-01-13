// Написать функцию longestWord, которая находит самое длинное слово в строке и возвращает его.
// Разделить строку на слова (по пробелам).
// Пройтись по списку слов и найти самое длинное.
// Вернуть самое длинное слово.

function longestWord(sentence: string) {
    let longestWord = "";

    const splitted = sentence.split(" ");

    for (const word of splitted) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(longestWord("There's a big pile of mailaddress on youraddress desk"));