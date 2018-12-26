// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let length = str.length;
    for (let i=0; i < Math.floor(length / 2); i++) {
        if (str[i] !== str[length - i - 1]) {
            return false;
        }
    }
    return true;
}

module.exports = palindrome;
