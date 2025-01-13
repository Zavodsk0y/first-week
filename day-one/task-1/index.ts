// Написать функцию identicalLetters, которая принимает две строки и возвращает строку с буквами, 
// которые встречаются в обеих строках.

function identicalLetters(firstString: string, secondString: string) {
    const firstSplittedString = firstString.split("");
    const secondSplittedString = secondString.split("");

    const firstSet = new Set(firstSplittedString);
    return [...new Set(secondSplittedString.filter(letter => firstSet.has(letter)))];
}

console.log(identicalLetters('apple', 'pinpal'))