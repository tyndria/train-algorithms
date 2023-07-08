// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;

  const isPalindrom = (leftIndex, rightIndex) => {
      const sliced = s.slice(leftIndex, rightIndex + 1);

      return sliced === sliced.split("").reverse().join("");
  }

  while (left < right) {
      if (s[left] === s[right]) {
          left ++;
          right --;
      } else {
          return isPalindrom(left + 1, right) || isPalindrom(left, right - 1);
      }
  }

  return true;
};