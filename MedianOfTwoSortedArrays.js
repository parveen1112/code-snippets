//Median of Two Sorted Array
// x - total number of elements of smaller length array
// y - total number of elements of larger array
// Binary Search on smaller array

function findMedianOfTwoSortedArray(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return findMedianOfTwoSortedArray(arr2, arr1);
    }
    var x = arr1.length;
    var y = arr2.length;
    var low = 0;
    var high = x;
    while (low < high) {
        var partitionX = Math.floor((low + high) / 2);
        var partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        var maxLeftOfX = partitionX > 0 ? arr1[partitionX - 1] : Number.MIN_SAFE_INTEGER;
        var minRightOfX = partitionX === x ? Number.MAX_SAFE_INTEGER : arr1[partitionX];

        var maxLeftOfY = partitionY > 0 ? arr2[partitionY - 1] : Number.MIN_SAFE_INTEGER;
        var minRightOfY = partitionY === y ? Number.MAX_SAFE_INTEGER : arr2[partitionY];
        if (maxLeftOfX <= minRightOfY && maxLeftOfY <= minRightOfX) {
            if (x + y % 2) {
                return (Math.max(maxLeftOfX, maxLeftOfY) + Math.min(minRightOfX, minRightOfY)) / 2;
            }
            return Math.max(maxLeftOfX, maxLeftOfY);
        } else if (maxLeftOfX > minRightOfY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }

    }
}

console.log("Median is: " + findMedianOfTwoSortedArray([23, 26, 31, 35], [3, 5, 7, 9, 11, 16]));