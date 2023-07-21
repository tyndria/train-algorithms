// Given a string s, find the first non-repeating character in it and return its index. 
// If it does not exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = {};

  for (const chr of s) {
      map[chr] = (map[chr] ?? 0) + 1;
  }
  
  for (let i = 0; i < s.length; i ++) {
      if (map[s[i]] === 1) {
          return i;
      }
  }
  
  return -1;
};