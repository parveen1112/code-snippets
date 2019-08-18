// You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

// Example 1:

// Input:
//   s = "barfoothefoobarman",
//   words = ["foo","bar"]
// Output: [0,9]
// Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar" respectively.
// The output order does not matter, returning [9,0] is fine too.
// Example 2:

// Input:
//   s = "wordgoodgoodgoodbestword",
//   words = ["word","good","best","word"]
// Output: []

function wordMap(words) {
    let map = {};
    for(let i=0; i < words.length; i++){
        map[words[i]] = (map[words[i]] + 1) || 1;
    }
    return map;
}
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!s.length || !words.length)  return [];

    let charLength = words[0].length;
    let left = 0, right = 0;
    let wordMapList = wordMap(words);
    let ownList = {};
    let required = words.length;
    let formed = 0;
    let indices = [];
    console.log("WordMapList", wordMapList);
    while ((right + charLength) <= s.length) {
        let substr = s.substr(right, charLength);
        console.log(substr, right, charLength);
        if (!!wordMapList[substr] && (ownList[substr] || 0) < wordMapList[substr]) {
            formed++;
            if (formed === required) {
                indices.push(left);
                right = left + 1;
                left = right;
                ownList = {};
                formed = 0;                    
            } else {
                right = right + charLength;
                ownList[substr] = (ownList[substr] || 0) + 1;
            }
        } else {
            right = left + 1;
            left = right;
            ownList = {};
            formed = 0;
        }
    }
    return indices;
};

console.log(findSubstring("wordgoodwordgoodbestword", ["word","good","best","word"]));
console.log(findSubstring("thbarfoothefoobarman", ["foo","bar"]));
console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]));
console.log(findSubstring("aaaaaaaa", ["aa","aa","aa"]));