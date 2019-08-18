// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const arr = [root, null], levelWidth = [];
    let counter = 0;
    while(arr.length) {
        const node = arr.shift();
        console.log(arr);
        if (node !== null) {
            counter += 1;
            arr.push(...node.children);
        } else {
            if (arr.length > 0) arr.push(null);
            levelWidth.push(counter);
            counter = 0;
        }
    }
    return levelWidth;
}

module.exports = levelWidth;
