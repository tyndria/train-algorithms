// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const map = {};

  if (s.length !== t.length) {
      return false;
  }

  for (let i = 0; i < s.length; i ++) {
      let sChar = s[i];
      let tChar = t[i];

      map[sChar] = (map[sChar] ?? 0) + 1;
      map[tChar] = (map[tChar] ?? 0) - 1;
  }

  return Object.values(map).every(v => v === 0);
};