// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let freqMap = {}, max = 0, char = '';
    for (let i=0; i < str.length; i++) {
        freqMap[str[i]] = (freqMap[str[i]] || 0) + 1;
    }
    for (let key in freqMap) {
        if (freqMap[key] > max) {
            char = key;
            max = freqMap[key];
        }
    }
    return char;
}

module.exports = maxChar;
