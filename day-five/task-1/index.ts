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

type ChoiceType = "Камень" | "Ножницы" | "Бумага";

type OutcomeMessageType = "Игрок побеждает!" | "Компьютер побеждает!" | "Ничья!"

interface IOutcome {
    playersChoice: ChoiceType,
    computersChoice: ChoiceType,
    outcomeMessage: OutcomeMessageType
}

const makeComputerChoice = (): ChoiceType => {
    const choices: ChoiceType[] = ['Камень', 'Ножницы', 'Бумага']
    return choices[Math.floor(Math.random() * choices.length)]
}

const outcomes: IOutcome[] = [
    {
        playersChoice: "Ножницы",
        computersChoice: "Ножницы",
        outcomeMessage: "Ничья!"
    },
    {
        playersChoice: "Ножницы",
        computersChoice: "Камень",
        outcomeMessage: "Компьютер побеждает!"
    },
    {
        playersChoice: "Ножницы",
        computersChoice: "Бумага",
        outcomeMessage: "Игрок побеждает!"
    },
    {
        playersChoice: "Камень",
        computersChoice: "Камень",
        outcomeMessage: "Ничья!"
    },
    {
        playersChoice: "Камень",
        computersChoice: "Ножницы",
        outcomeMessage: "Игрок побеждает!"
    },
    {
        playersChoice: "Камень",
        computersChoice: "Бумага",
        outcomeMessage: "Компьютер побеждает!"
    },
    {
        playersChoice: "Бумага",
        computersChoice: "Камень",
        outcomeMessage: "Игрок побеждает!"
    },
    {
        playersChoice: "Бумага",
        computersChoice: "Бумага",
        outcomeMessage: "Ничья!"
    },
    {
        playersChoice: "Бумага",
        computersChoice: "Ножницы",
        outcomeMessage: "Компьютер побеждает!"
    },
]

const rockPaperScissors = (choice: ChoiceType): IOutcome => {
    const computerChoice = makeComputerChoice()
    let party = {
        playersChoice: choice,
        computerChoice: computerChoice,
    }
    let result = outcomes.filter(outcome => outcome.playersChoice == party.playersChoice && outcome.computersChoice == party.computerChoice);
    const outcome = Object.assign({}, ...result)
    return outcome
}

console.log(rockPaperScissors("Ножницы"))
