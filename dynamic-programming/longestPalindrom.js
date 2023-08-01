// Given a string s, return the longest palindromic substring in s.

/**
 * @param {string} s
 * @return {string}
 */

// dp o(n^2 approach)
var longestPalindrome = function(s) {
  const n = s.length;
  let answer = [0, 0];

  let dp = [...Array(n)].map(() => Array(n));
  
  // string with length 1 is a palindrom
  for (let i = 0; i < n; i ++) {
      dp[i][i] = true;
  }

  // string with length 2 is palindrom if s[i] === s[j] and j = i + 1
  for (let i = 0; i < n - 1; i ++) {
      if (s[i] === s[i + 1]) {
          dp[i][i + 1] = true;
          answer = [i, i + 1];
      }
  }


  // iterate over start and end differences 
  for (let diff = 2; diff < n; diff ++) {
      for (let i = 0; i < (n - diff); i ++) {
          const j = i + diff;
          dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
          if (dp[i][j]) {
              answer = [i, j];
          }
      }
  }

  return s.slice(answer[0], answer[1] + 1);
};


// o(n^2) approach using centers checks
var longestPalindrome = function(s) {
  const n = s.length;
  let answer = [0, 0];

  // odd length palindrom
  for (let i = 0; i < n; i ++) {
      const maxPalindrom = expand(i, i, s);
      if (maxPalindrom[1] - maxPalindrom[0] > answer[1] - answer[0]) {
          answer = [...maxPalindrom];
      }
  }  

  // even length palindrom
  for (let i = 0; i < n - 1; i ++) {
      const maxPalindrom = expand(i, i + 1, s);
      if (maxPalindrom[1] - maxPalindrom[0] > answer[1] - answer[0]) {
          answer = [...maxPalindrom];
      }
  }  

  return s.slice(answer[0], answer[1] + 1);
};

const expand = (i, j, s) => {
  while (i >= 0 && j < s.length && s[i] == s[j]) {
      i --;
      j ++;
  }

  return [i + 1, j - 1];
}