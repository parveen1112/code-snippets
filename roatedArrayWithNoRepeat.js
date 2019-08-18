var binarySearch = function(low, high, nums, target) {
    if (high < low) return -1;
    var mid = Math.floor((high + low)/2);
    if (nums[mid] === target) return mid;
    console.log(nums[low], nums[mid], target);
    if (nums[low] < nums[mid]) {
        if (target <= nums[mid] && target >= nums[low]) {
            return binarySearch(low, mid - 1, nums, target);
        }
        return binarySearch(mid+1, high, nums, target);
    }
    if (target >= nums[mid+1] && target <= nums[high])
        return binarySearch(mid+1, high, nums, target);
    return binarySearch(low, mid - 1, nums, target);
}
var search = function(nums, target) {
    return binarySearch(0, nums.length - 1, nums, target);
};
