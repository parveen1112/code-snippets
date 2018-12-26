// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
const reverse = require('../stringReversal');

function reverseInt(n) {
    const sign = n < 0 ? -1 : 1;
    const str = (n * sign).toString();
    const reversedStr = reverse(str);
    return sign * reversedStr;
}

module.exports = reverseInt;
