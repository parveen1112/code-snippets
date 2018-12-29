// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }
    if (stair.length === n) {
        console.log(stair);
        steps(n, row+1);
        return;
    }
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair);
}

module.exports = steps;

// function steps(n, x = n) {
//     if (n === 0) {
//         return;
//     }
//     steps(n - 1, x);
//     let str = '';
//     for (var i=0; i <x; i++) {
//         if (i < n) {
//             str += '#';
//         } else {
//             str += ' ';
//         }
//     }
//     console.log(str);
// }

// function steps(n) {
//     let str;
//     for (let i=1; i <= n; i++) {
//         str = '';
//         for (let j=0; j < i; j++) {
//             str += '#';
//         }
//         for (let k=i; k < n; k++) {
//             str += ' ';
//         }
//         console.log(str);
//     }
// }
