/*
 Longest Substring with At Least K Repeating Characters

 Find the length of the longest substring T of a given string (consists of lowercase letters only)
 such that every character in T appears no less than k times.
* */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/* ATTENTION: not so good solution from runtime prospective */
const longestSubstring = (s, k) => {
  let max = 0;

  const processSubstring = (s, k) => {
    const charsMap = {};
    for (let i = 0; i < s.length; i ++) {
      const char = s[i];
      if (!charsMap[char]) {
        charsMap[char] = {first: i, last: i, count: 1};
      } else {
        const charInfo = charsMap[char];
        if (charInfo.count < k) {
          const count = charInfo.count + 1
          charsMap[char] = {...charInfo, last: i, count};
        }
      }
    }

    return charsMap;
  }

  const findMax = (s, k, charsInfo) => {
    if (s.length && s.length >= k && s.length > max) {
      const isSolution = Object.values(charsInfo).every(chars => chars.count >= k);
      if (isSolution) {
        max = Math.max(max, s.length);
      } else {
        const defectChar = Object.keys(charsInfo).find(key => charsInfo[key].count < k);
        const {last} = charsInfo[defectChar];

        if (last !== s.length - 1) {
          const secondHalf = s.slice(last + 1, s.length);
          findMax(secondHalf, k, processSubstring(secondHalf, k));
        }

        const firstHalf = s.slice(0, last);
        findMax(firstHalf, k, processSubstring(firstHalf, k));
      }
    }
  }

  findMax(s, k, processSubstring(s, k));

  return max;
};
