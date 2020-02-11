/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.
*/

// UGLY INITIAL SOLUTION
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const freqMap = {};
  
  for (char of s) {
      if (!freqMap[char]) {
          freqMap[char] = 1;
      } else {
          freqMap[char] += 1;
      }
  }
  
  let maxOdd = -1;
  for (char of s) {
      if (freqMap[char] % 2 === 1) {
          maxOdd = Math.max(maxOdd, freqMap[char]);
      }
  }
  
  let result = 0;

  for (char of Object.keys(freqMap)) {
      if (freqMap[char] % 2 == 0) { // add each even freq
          result += freqMap[char];
      } else if (freqMap[char] === maxOdd) { // add max odd to the middle
          result += freqMap[char];
          maxOdd = -1;
      } else if (freqMap[char] != 1) { // add the rest of odd
          result += (freqMap[char] - 1);
      }
  }
  
  return result;
};

// MORE ELEGAMT

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const freqMap = {};
  
  let result = 0;
  for (char of s) {
      freqMap[char] = (freqMap[char] || 0) + 1;
      if (freqMap[char] % 2 === 0) {
          result += 2;
      }
  }
  
  return result < s.length ? result + 1 : result;
};