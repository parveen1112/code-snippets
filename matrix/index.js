// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let startRow = 0, startCol = 0, endRow = n - 1, endCol = n - 1;
    let arr = [];
    let counter = 0;
    for (let i=0; i < n; i++) {
        arr[i] = [];
        for (let j=0; j < n; j++) {
            arr[i][j] = -1;
        }
    }
    while (startRow <= endRow && startCol <= endCol) {
        for (let i=startCol; i <= endCol; i++) {
            arr[startRow][i] = ++counter;
        }
        startRow += 1;
        for (let i=startRow; i <= endRow; i++) {
            arr[i][endCol] = ++counter;
        }
        endCol -= 1;
        for (let i=endCol; i >= startCol; i--) {
            arr[endRow][i] = ++counter;
        }
        endRow -= 1;
        for (let i=endRow; i >= startRow; i--) {
            arr[i][startCol] = ++counter;
        }
        startCol += 1;
    }
    return arr;
}

module.exports = matrix;
