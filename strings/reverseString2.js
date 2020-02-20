
/*
Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them.
If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

//  USING SLICE
var reverseStr = function(s, k) {
  const reverse = (str) => {
      return str.split("").reverse().join("");
  };
  
  const period = 2 * k;
  
  let result = "";

  let i = 0;
  while (true) {
      const start = i * period;
      const end = start + period;
      
      if (start >= s.length) {
          break;
      } else {
          const stringToReverse = s.slice(start, end);
          result += reverse(stringToReverse.slice(0, k));
          result += stringToReverse.slice(k);
          
          i += 1;
      }
  }
  
  return result;
};