// Find maximum product of two integers in an array

function getMaxProduct(arr) {
    if (!arr.length) return null;
    let i = 0;
    let max1 = Number.MIN_SAFE_INTEGER, max2 = Number.MIN_SAFE_INTEGER;
    let min1 = Number.MAX_SAFE_INTEGER, min2 = Number.MAX_SAFE_INTEGER;
    console.log(min1, min2, max1, max2);
    while(i < arr.length) {
        switch(true) {
            case arr[i] > max1:
                max2 = max1;
                max1 = arr[i];
                break;
            case arr[i] > max2:
                max2 = arr[i];
                break;
            case arr[i] < min1:
                min2 = min1;
                min1 = arr[i];
                break;
            case arr[i] > min2:
                min2 = arr[i];
                break;
        }
        console.log(arr[i],min1, min2, max1, max2);
        i++;
    }
    console.log(min1, min2, max1, max2);
    return Math.max(min1*min2, max1*max2);
}

console.log(getMaxProduct([-10,-3,5,6,-2]));
