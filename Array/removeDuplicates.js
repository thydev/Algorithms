/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/
var removeDuplicates = function(nums) {
  // this is a sorted array so the lastvalue will be the end of the loop
  // lastvalue of array
  // while the element != lastvalue then
  // if current === next, remove the next elmeent ==> use splice to remove the element at the mext index
  // when exit loop , splice the rest of the element after the lastvalue

  var lastValue = nums[nums.length - 1];
  var current = nums[0];
  var counter = 0;
  while (current < lastValue) {
    if (current === nums[counter + 1]) {
      // remove the next element
      nums.splice(counter + 1, 1);
    } else {
      counter++;
      current = nums[counter];
    }
  }
  nums.splice(counter + 1, nums.length - counter);
  return nums;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 1, 2, 2]));
