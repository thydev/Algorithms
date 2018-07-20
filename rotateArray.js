/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // find the first postion to swap

  if (nums.length < 2) {
    return;
  }

  var cutarr = nums.splice(nums.length - k, k);
  nums.unshift(...cutarr);
  console.log(nums);
  console.log(cutarr);

  // var counter = 0;
  //     while ( k > 0) {
  //         // var tmp = nums[0]
  //         // nums[0] = nums[nums.length - 1];
  //         // for (var i = nums.length - 1; i > 1; i--) {
  //         //     nums[i] = nums[i - 1];
  //         // }
  //         // nums[1] = tmp;
  //         // last postion - 1 to k - 1
  //         //
  //         console.log(nums)
  //         k--;
  //     }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [ 5, 6, 7, 1, 2, 3, 4 ]
