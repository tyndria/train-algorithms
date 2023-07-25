/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

   Each letter in magazine can only be used once in ransomNote.
 * 
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let lettersBank = {};

  if (ransomNote.length > magazine.length) {
      return false;
  }

  for (const letter of magazine) {
      lettersBank[letter] = (lettersBank[letter] ?? 0) + 1;
  }

  for (const letter of ransomNote) {
      if (lettersBank[letter] > 0) {
          lettersBank[letter] -= 1;
      } else {
          return false;
      }
  }

  return true;
};