var binarySearch = function(low, high, nums, target) {
  while (low <= high) {
    var mid = Math.floor((high + low)/2);
    console.log(low, mid, high);
    if (nums[mid] === target) return mid;
    // if (nums[mid - 1] === target) return mid - 1;
    // if (nums[mid + 1] === target) return mid + 1;
    if (nums[mid] <= nums[high]) {
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      if (target > nums[low] && target <= nums[mid - 1]) {
        high = mid - 1;
      } else {
        low = mid + 1
      }
    }
  }
  return -1;
}

var search = function(nums, target) {
    return binarySearch(0, nums.length - 1, nums, target);
};

console.log(search([2, 1, 3, 5, 4, 7, 6, 8, 9], 9));