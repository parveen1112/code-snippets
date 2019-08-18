// https://leetcode.com/problems/longest-mountain-in-array/

const mountain = (arr) => {
    let start = 0;
    let end = 0;
    let maxMountain = 0;
    while(end < arr.length) {
        if ((end + 1) < arr.length && arr[end] < arr[end + 1]) {
            while ((end + 1) < arr.length && arr[end] < arr[end + 1]) {
                end += 1;
            }
            if ((end + 1) < arr.length && arr[end] > arr[end + 1]) {
                while((end + 1) < arr.length && arr[end] > arr[end + 1]) {
                    end += 1;
                }
                if (maxMountain < (end - start + 1)) {
                    maxMountain = end - start + 1;
                }
            }    
        }
        start = Math.max(end, start + 1);
    }
    return maxMountain;
};

module.exports = mountain;