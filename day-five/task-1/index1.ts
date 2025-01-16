// Условие:
// Напишите функцию для игры "Камень, ножницы, бумага". Функция должна:
// Принимать на вход одно из трех значений: "Камень", "Ножницы" или "Бумага", которое представляет выбор игрока.
// Случайным образом генерировать выбор компьютера.
// Определять победителя на основе классических правил игры:
// Камень побеждает ножницы.
// Ножницы побеждают бумагу.
// Бумага побеждает камень.
// Если выборы одинаковы, это ничья.
// Возвращать результат игры: кто победил, и что выбрали игрок и компьютер.
// Алгоритм:
// Определить массив возможных значений: ["Камень", "Ножницы", "Бумага"].
// Получить входное значение от игрока. Проверить, что оно соответствует одному из допустимых значений. Если нет, выбросить ошибку.
// Случайным образом выбрать значение для компьютера из массива.
// Сравнить выбор игрока и компьютера:
// Если оба значения одинаковы, результат — ничья.
// Если выбор игрока побеждает выбор компьютера по правилам, игрок побеждает.
// В остальных случаях побеждает компьютер.
// Вернуть объект с результатом игры, содержащий выборы игрока и компьютера, а также сообщение о победителе.

type Choice = "Камень" | "Ножницы" | "Бумага";

type OutcomeMessage = "Игрок побеждает!" | "Компьютер побеждает!" | "Ничья!";

interface Outcome {
    playersChoice: Choice,
    computersChoice: Choice,
    outcomeMessage: OutcomeMessage
}

const makeComputerChoice = (): Choice => {
    const choices: Choice[] = ['Камень', 'Ножницы', 'Бумага']
    return choices[Math.floor(Math.random() * choices.length)]
}

const rockPaperScissors = (playersChoice: Choice): Outcome => {
    const computersChoice = makeComputerChoice()
    let outcomeMessage: OutcomeMessage
    if (computersChoice === playersChoice) outcomeMessage = 'Ничья!'
    else if (playersChoice === 'Ножницы' && computersChoice === 'Камень' ||
    playersChoice === 'Камень' && computersChoice === 'Бумага' ||
    playersChoice === 'Бумага' && computersChoice === 'Ножницы') {
        outcomeMessage = 'Компьютер побеждает!'
    }
    else outcomeMessage = 'Игрок побеждает!'
    return {
        playersChoice,
        computersChoice,
        outcomeMessage
    }

}

console.log(rockPaperScissors("Камень"))
