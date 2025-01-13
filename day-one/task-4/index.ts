// Реализовать функции runLengthEncoding и runLengthDecoding, для кодирования и декодирования строк с использованием метода Run-Length Encoding (RLE).
// Кодирование: Пройти по строке, подсчитывая количество одинаковых подряд идущих символов и записывать их в виде "символ-количество".
// Декодирование: Пройти по закодированной строке и развернуть её, восстанавливая исходную строку.

function runLengthEncoding(decodedString: string): string {
    let lengthOfRange = 1;

    // Массивы типизировал, чтобы тс не ругался
    const encodedString: string[] = [];

    for (let i = 0; i < decodedString.length; i++) {
        if (decodedString[i] !== decodedString[i+1]) {
            encodedString.push(`${decodedString[i]}-${lengthOfRange}`);
            lengthOfRange = 0;   
        }
        lengthOfRange += 1;
    }

    return encodedString.join("");
}

function runLengthDecoding(encodedString: string): string {
    const decodedString: string[] = [];

    const matches = encodedString.match(/([A-Za-z])-(\d+)/g);

    if (matches) {
        for (const match of matches) {
            const [char, count] = match.split("-");
            decodedString.push(char.repeat(Number(count)));
        }
    }

    return decodedString.join("");
}

console.log(runLengthEncoding("AAAABBCBAADD"))
console.log(runLengthDecoding("A-4B-2C-1B-1A-2D-2"))
