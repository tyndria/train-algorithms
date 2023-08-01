// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  return partition(nums, k);
};

const partition = (nums, k) => {
  const higher = [];
  const lower = [];
  const same = [];

  const pivotIndex = Math.floor(Math.random() * nums.length);
  const pivot = nums[pivotIndex];

  for (const num of nums) {
      if (pivot === num) {
          same.push(num);
      } else if (pivot < num) {
          higher.push(num);
      } else {
          lower.push(num);
      }
  }

  if (higher.length >= k) {
      return partition(higher, k);
  } else if ((higher.length + same.length) < k) {
      return partition(lower, k - (higher.length + same.length));
  }

  return pivot;
}