//Longest Common Subsequence
// Dynamic Programming
function getLongestCommonSubsequence(str1, str2) {
    var table = [],
        longestCommonLength, sequence = [],
        posX, posY, sequenceLength;
    for (var i = 0; i <= str1.length; i++) {
        table[i] = [];
        for (var j = 0; j <= str2.length; j++) {
            if (i === 0 || j === 0) {
                table[i][j] = 0;
            } else if (str1[i - 1] === str2[j - 1]) {
                table[i][j] = table[i - 1][j - 1] + 1;
            } else {
                table[i][j] = Math.max(table[i][j - 1], table[i - 1][j]);
            }
        }
    }
    posX = table.length - 1;
    posY = table[posX].length - 1;
    longestCommonLength = table[posX][posY];
    sequenceLength = longestCommonLength;
    while (posX >= 1 && posY >= 1) {
        if (Math.max(table[posX - 1][posY], table[posX][posY - 1]) !== table[posX][posY]) {
            posX = posX - 1;
            posY = posY - 1;
            sequence.push(str1[posX]);
        } else if (table[posX - 1][posY] === table[posX][posY]) {
            posX = posX - 1;
        } else {
            posY = posY - 1;
        }
    }
    return longestCommonLength;
}

console.log("LongestCommonSubsequence is: " + getLongestCommonSubsequence('GXTXAY', 'AGGTAB'));