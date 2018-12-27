// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function getFrequencyMap(str) {
    let freqMap = {};
    for (let char of str) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }
    return freqMap;
}

function anagrams(stringA, stringB) {
    const freqMapA = getFrequencyMap(stringA.replace(/[^\w]/g, '').toLowerCase());
    const freqMapB = getFrequencyMap(stringB.replace(/[^\w]/g, '').toLowerCase());

    if (Object.keys(freqMapA).length !== Object.keys(freqMapB).length)
        return false;
    
    for (let i in freqMapA) {
        if (freqMapA[i] !== freqMapB[i]) {
            return false;
        }
    }
    return true;
}

module.exports = anagrams;
