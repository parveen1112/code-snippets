/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/problems/longest-valid-parentheses/
 */
var longestValidParentheses = function(s) {
    let i = 0, left = 0, validList = [0], state = false, validParanthesis = 0;
    while(i < s.length) {
        if (s[i] === '(') {
            left += 1;
        } else if (left > 0 && s[i] === ')') {
            validParanthesis += 2;
            left -= 1;
        } else {
            if (validParanthesis > 0)
                validList.push(validParanthesis);
            validParanthesis = 0;
        }
        i++;
    }
    if (validParanthesis > 0)
        validList.push(validParanthesis);
    return Math.max.apply(null, validList);
};

console.log(longestValidParentheses(''));