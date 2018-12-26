// Longest Increasing Subsequence - Sorted Longest Sequence
// Length as well as sequence
// Dynamic Programming

function getLongestIncreasingSubsequence(a) {
    var lis = [1],
        max, pos, sequence = [];
    for (var i = 1; i < a.length; i++) {
        lis[i] = 1;
        for (var j = 0; j <= i - 1; j++) {
            if (a[i] > a[j]) {
                lis[i] = Math.max(lis[j] + 1, lis[i]);
            }
        }
    }
    max = lis.reduce(function (a, b, i) {
        if (b > a) {
            pos = i;
            return b;
        }
        return a;
    });
    sequence.push(a[pos]);
    for (var k = pos - 1; k >= 0; k--) {
        if (lis[k] === lis[pos] - 1) {
            sequence.push(a[k]);
            pos = k;
        }
    }
    return max;
}

console.log("getLongestIncreasingSubsequence is: " + getLongestIncreasingSubsequence([3, 4, -1, 0, 6, 2, 3]));
console.log("getLongestIncreasingSubsequence is: " + getLongestIncreasingSubsequence([2, 5, 1, 8, 3]));
console.log("getLongestIncreasingSubsequence is: " + getLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60]));