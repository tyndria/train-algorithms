// Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length  <= 1) {
      return s.length;
  }
  
  let leftIndex = 0;
  let rightIndex = 0;
  let map = {};
  let longest = 1;
  
  while (rightIndex < s.length) {
      if (!map[s[rightIndex]]) {
          longest = Math.max(longest, rightIndex - leftIndex + 1);
          map[s[rightIndex]] = (map[s[rightIndex]] ?? 0) + 1;
          rightIndex ++;
      } else {
          map[s[leftIndex]] -= 1;
          leftIndex ++;
      }
  }
  
  return longest;
};