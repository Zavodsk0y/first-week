// Реализовать функцию indexOf, которая находит подстроку в строке без использования встроенных функций поиска, таких как find, index, indexOf.
// Пройти по строке и на каждом шаге проверить, совпадает ли текущий фрагмент строки с подстрокой.
// Если совпадает, вернуть индекс первого вхождения.
// Если не нашли, вернуть -1.

function indexOf(sentence: string, substring: string) {
    let substringCounter = 0;
    let position = -1;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === substring[substringCounter]) {
            substringCounter += 1;
            if (substringCounter === substring.length) {
                position = i - substringCounter + 1;
            }
        } else {
            substringCounter = 0;
        }
    }

    return position;
}

console.log(indexOf("There's a mail on your desk", "mail"));