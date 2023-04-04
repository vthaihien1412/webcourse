function romanToInt(roman) {
    let number = charInt(roman.charAt(0));
    let currentNumber, previousNumber;

    for (let i = 1; i < roman.length; i++) {
        currentNumber = charInt(roman.charAt(i));
        previousNumber = charInt(roman.charAt(i - 1));

        if (currentNumber <= previousNumber) {
            number += currentNumber;
        } else {
            number = number - previousNumber * 2 + currentNumber;
        }
    }
    return number;
}
function charInt(c) {
    switch (c) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
    }
}
console.log(romanToInt("III")); // Expect to be 3
console.log(romanToInt("LVIII")); // Expect to be 58 because  L = 50, V= 5, III = 3.
console.log(romanToInt("MCMXCIV")); // Expect to be 1994 because M = 1000, CM = 900, XC = 90 and IV = 4.
