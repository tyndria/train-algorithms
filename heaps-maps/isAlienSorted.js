// runtime complexity O(words_length * words_max_length) ?

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const numericOrder = {};
  let index = 0;
  for (const char of order) {
      numericOrder[char] = index++;
  }
  
  let isSorted = true;
  if (words.length === 1) {
      return isSorted;
  }
  

  for (let i = 0; i < words.length - 1; i ++) {
      const current = words[i];
      const next = words[i + 1];
      
      const minLength = Math.min(current.length, next.length);
      for (let j = 0; j < minLength; j ++) {
          if (numericOrder[current[j]] > numericOrder[next[j]]) {
              isSorted = false;
              break;
          } else if (numericOrder[current[j]] < numericOrder[next[j]]) {
              break;
          }

          if (j === (minLength - 1) && next.length < current.length) {
              isSorted = false;
              break;
          }
      }

      if (!isSorted) {
          break;
      }
  } 

  return isSorted;
};
