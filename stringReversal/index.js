// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1 
// function reverse(str) {
//     let reversedStr = '';
//     for (let i=0; i < str.length; i++) {
//         reversedStr = str[i] + reversedStr;
//     }
//     return reversedStr;
// }

// Solution 2

function reverse(str) {
    if (str.length < 2) return str;
    return reverse(str.substr(1)) + str[0];
}
module.exports = reverse;
