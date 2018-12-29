// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, pyrid = '') {
    if (n === row) {
        return;
    }
    const y = 2*n - 1;
    if (pyrid.length === y) {
        console.log(pyrid);
        pyramid(n, row+1);
        return;
    }
    const midpoint = Math.floor(y/2);
    if (pyrid.length >= midpoint - row && pyrid.length <= (midpoint + row)) {
        pyrid += '#';
    } else {
        pyrid += ' ';
    }
    pyramid(n, row, pyrid);


}

module.exports = pyramid;
