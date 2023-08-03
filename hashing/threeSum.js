/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const triplets = [];
  const set = new Set();
  
  for (let i = 0; i < nums.length; i ++) {
      const map = {};
      
      // nums[j] + y = - nums[i];
      for (let j = i + 1; j < nums.length; j ++) {
          map[-nums[i] - nums[j]] = j;
      }
      
      for (let k = i + 1; k < nums.length; k ++) {
          if (typeof map[nums[k]] !== 'undefined') {
              const j = map[nums[k]];
              
              if (j !== k && k !== i && i != j) {
                  const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                  const tripletString = triplet.join('');
                  if (!set.has(tripletString)) {
                      triplets.push(triplet);
                      set.add(tripletString);
                  }
              }
          }
      }
  }
  
  return triplets;
};