var binarySearch = function(low, high, nums, target) {
    if (high < low) return -1;
    var mid = Math.floor((high + low)/2);
    if (nums[mid] === target) return mid;
    if (nums[mid - 1] === target) return mid - 1;
    if (nums[mid + 1] === target) return mid + 1;

    console.log(nums[low], nums[mid], target);

    if (nums[mid] > nums[mid - 1] && nums[mid] < nums[mid + 1]) {
      index = mid;
    } else if (nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1]) {
      index = mid - 1;
    } else {
      index = mid + 1;
    }
    
    if (target < nums[index]) {
        return binarySearch(low, index - 1, nums, target);
    }
    return binarySearch(mid+1, high, nums, target);}

var search = function(nums, target) {
    return binarySearch(0, nums.length - 1, nums, target);
};

console.log(search([2, 1, 3, 5, 4, 7, 6, 8, 9], 9));