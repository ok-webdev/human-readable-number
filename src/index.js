module.exports = function toReadable(number) {
    const DIGITS = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };

    if (number == 0) {
        return 'zero';
    } else if (number <= 20) {
        return DIGITS[number];
    } else if (number % 10 === 0 && number.toString().length === 2) {
        return DIGITS[number];
    } else if (number % 10 !== 0 && number.toString().length >= 2 && number > 20 && number < 100) {
        number = number.toString()
        let tens = +number[0];
        let beforeTen = +number[1];
        return `${DIGITS[tens]} ${DIGITS[beforeTen]}`;
    } else {
        number = number.toString()
        let = hundreds = +number[0];
        tens = +(number[1] + 0);
        beforeTen = +number[2];
        if (number % 100 !== 0 && tens === 0) {
            return `${DIGITS[hundreds]} hundred ${DIGITS[beforeTen]}`;
        } else if (number % 100 !== 0 && tens === 10) {
            console.log(DIGITS[beforeTen]);
            return `${DIGITS[hundreds]} hundred ${DIGITS[beforeTen]}`;
        } else if (number % 100 === 0 && hundreds === 1) {
            return `${DIGITS[hundreds]} hundred`;
        } else if (number % 10 === 0 && hundreds === 1) {
            return `${DIGITS[hundreds]} hundred ${DIGITS[tens]}`;
        } else if (number % 100 === 0 && hundreds !== 1) {
            return `${DIGITS[hundreds]} hundred`;
        } else if (number % 10 === 0 && hundreds !== 1) {
            return `${DIGITS[hundreds]} hundred ${DIGITS[tens]}`;
        }
        return `${DIGITS[hundreds]} hundred ${DIGITS[tens]} ${DIGITS[beforeTen]}`;
    }
}

