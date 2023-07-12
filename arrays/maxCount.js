
// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.


// Version 2
const leftBisect = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
      const middle = Math.ceil((low + high) / 2);

      if (nums[middle] < target) {
          low = middle;
      } else {
          high = middle - 1;
      }
  }

  return nums[0] >= target ? 0 : low + 1;
}  

var maximumCount = function(nums) {
  const neg = leftBisect(nums, 0);

  const pos = nums.length - leftBisect(nums, 1)

  return Math.max(neg, pos);
};


// Version 1

var maximumCount = function(nums) {
  let negativeIntegersEnd = nums.length - 1;
  let negativeIntegersStart = 0;

  while (negativeIntegersStart < negativeIntegersEnd) {
      let middle = Math.ceil((negativeIntegersEnd + negativeIntegersStart) / 2);
      if (nums[middle] >= 0) {
          negativeIntegersEnd = middle - 1;
      } else {
          negativeIntegersStart = middle;
      }
  }

  const negativeIntegersCount = nums[0] >= 0 ? 0 : negativeIntegersStart + 1;

  let positiveIntegersStart = negativeIntegersCount;
  let positiveIntegersEnd = nums.length - 1;

  while (positiveIntegersStart < positiveIntegersEnd) {
      let middle = Math.floor((positiveIntegersEnd + positiveIntegersStart) / 2);
      
      if (nums[middle] === 0) {
          positiveIntegersStart = middle + 1;
      } else {
          positiveIntegersEnd = middle;
      }
  }

  const positiveIntegersCount = nums[nums.length - 1] <= 0 ? 0 : nums.length - positiveIntegersStart;

  return Math.max(positiveIntegersCount, negativeIntegersCount);
};