// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


// Approach 1 with O(n) additional space
var productExceptSelf = function(nums) {
  const left = [1];
  const right = [];
  right[nums.length - 1] = 1;
  
  for (let i = 1; i < nums.length; i ++) {
      left[i] = left[i - 1] * nums[i - 1];
  }
  
  for (let i = nums.length - 2; i >= 0; i --) {
      right[i] = right[i + 1] * nums[i + 1];
  }
  
  return nums.map((_, index) => {
      return right[index] * left[index];
  })
};

// Approach 2 with O(1) additional space

var productExceptSelf = function(nums) {
  const result = [1];
  let rightProduct = 1;
  
  for (let i = 1; i < nums.length; i ++) {
      result[i] = result[i - 1] * nums[i - 1];
  }
  
  for (let i = nums.length - 1; i >= 0; i --) {
      result[i] *= rightProduct;
      rightProduct *= nums[i];
  }
  
  return result;
};