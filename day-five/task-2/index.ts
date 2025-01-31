// Напишите функцию, которая принимает на вход целое положительное число (сумму) и возвращает минимально возможное количество купюр, необходимых для разбиения этой суммы.
// Доступные номиналы купюр: 1, 2, 5, 10, 50, 100.
// Функция должна:
// Получать на вход целое число N (сумму).
// Определять, сколько купюр каждого номинала потребуется, чтобы общее количество купюр было минимальным.
// Возвращать объект, где указано количество купюр каждого номинала.
// Создайте массив доступных номиналов купюр в порядке убывания: [100, 50, 10, 5, 2, 1].
// Инициализируйте объект для хранения результата, где ключи — номиналы купюр, а значения — количество каждой купюры.
// Для каждого номинала:
// Делите сумму на текущий номинал, чтобы определить, сколько купюр данного номинала требуется.
// Сохраняйте это количество в объекте результата.
// Уменьшайте сумму на эквивалентное количество средств, уже разбитых на купюры.
// Повторяйте процесс для следующего номинала, пока сумма не станет равной 0.
// Верните объект с количеством каждой купюры

type DenominationsType = [100, 50, 10, 5, 2, 1]

type ExchangeResultType = Record<DenominationsType[number], number>

const denominations: DenominationsType = [100, 50, 10, 5, 2, 1]

const exchangeOnDenominations = (n: number): ExchangeResultType => {
    if (n <= 0) {
        throw Error('Не получится разменять долги и ничего...')
    }
    let exchangeResult: ExchangeResultType = {
        100: 0,
        50: 0,
        10: 0,
        5: 0,
        2: 0,
        1: 0
    }
    let interim: number;
    let denominationKey: keyof ExchangeResultType
    for(let denomination of denominations) {
        interim = Math.floor(n / denomination)
        n = n - denomination * interim
        denominationKey = denomination
        exchangeResult[denominationKey] = interim
    }

    return exchangeResult
}

console.log(exchangeOnDenominations(1180))
