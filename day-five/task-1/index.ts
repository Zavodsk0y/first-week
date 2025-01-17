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

enum ChoiceEnum {
    Rock = "Камень",
    Scissors = "Ножницы",
    Paper = "Бумага"
}

enum OutcomeMessageEnum {
    ComputersVictory = "Компьютер побеждает!",
    PlayersVictory = "Игрок побеждает!",
    Withdraw = "Ничья!"
}

interface IOutcome {
    playersChoice: ChoiceEnum,
    computersChoice: ChoiceEnum,
    outcomeMessage: OutcomeMessageEnum
}

const makeComputerChoice = (): ChoiceEnum => {
    const choices: ChoiceEnum[] = [ChoiceEnum.Rock, ChoiceEnum.Scissors, ChoiceEnum.Paper]
    return choices[Math.floor(Math.random() * choices.length)]
}

const outcomes: IOutcome[] = [
    {
        playersChoice: ChoiceEnum.Scissors,
        computersChoice: ChoiceEnum.Scissors,
        outcomeMessage: OutcomeMessageEnum.Withdraw
    },
    {
        playersChoice: ChoiceEnum.Scissors,
        computersChoice: ChoiceEnum.Rock,
        outcomeMessage: OutcomeMessageEnum.ComputersVictory
    },
    {
        playersChoice: ChoiceEnum.Scissors,
        computersChoice: ChoiceEnum.Paper,
        outcomeMessage: OutcomeMessageEnum.PlayersVictory
    },
    {
        playersChoice: ChoiceEnum.Rock,
        computersChoice: ChoiceEnum.Rock,
        outcomeMessage: OutcomeMessageEnum.Withdraw
    },
    {
        playersChoice: ChoiceEnum.Rock,
        computersChoice: ChoiceEnum.Scissors,
        outcomeMessage: OutcomeMessageEnum.PlayersVictory
    },
    {
        playersChoice: ChoiceEnum.Rock,
        computersChoice: ChoiceEnum.Paper,
        outcomeMessage: OutcomeMessageEnum.ComputersVictory
    },
    {
        playersChoice: ChoiceEnum.Paper,
        computersChoice: ChoiceEnum.Rock,
        outcomeMessage: OutcomeMessageEnum.PlayersVictory
    },
    {
        playersChoice: ChoiceEnum.Paper,
        computersChoice: ChoiceEnum.Paper,
        outcomeMessage: OutcomeMessageEnum.Withdraw
    },
    {
        playersChoice: ChoiceEnum.Paper,
        computersChoice: ChoiceEnum.Scissors,
        outcomeMessage: OutcomeMessageEnum.ComputersVictory
    },
]

const rockPaperScissors = (choice: ChoiceEnum): IOutcome => {
    const computerChoice = makeComputerChoice()
    const party = {
        playersChoice: choice,
        computerChoice: computerChoice,
    }
    let result = outcomes.filter(outcome => outcome.playersChoice == party.playersChoice && outcome.computersChoice == party.computerChoice);
    
    return Object.assign({}, ...result)
}

console.log(rockPaperScissors(ChoiceEnum.Scissors))