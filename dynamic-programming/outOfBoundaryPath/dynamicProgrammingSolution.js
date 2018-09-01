/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */

const create2dArray = (m, n) => {
  const array = new Array(m).fill(0);
  for (let i = 0; i < m; i ++) {
    array[i] = new Array(n).fill(0);
  }
  return array;
}

const findPaths = function(m, n, N, currI, currJ) {
  let paths = 0;
  let dp = create2dArray(m, n);
  dp[currI][currJ] = 1;
  const M = 1000000000 + 7;

  for (let steps = 1; steps <= N; steps ++) {
    const temp = create2dArray(m, n);

    for (let i = 0; i < m; i ++) {
      for (let j = 0; j < n; j ++) {
        if (i === m - 1) {
          paths = (paths + dp[i][j]) % M;
        } else {
          temp[i][j] += (dp[i + 1][j] % M);
        }

        if (i === 0) {
          paths = (paths + dp[i][j]) % M;
        } else {
          temp[i][j] += (dp[i - 1][j] % M);
        }

        if (j === n - 1) {
          paths = (paths + dp[i][j]) % M;
        } else {
          temp[i][j] += (dp[i][j + 1] % M);
        }

        if (j === 0) {
          paths = (paths + dp[i][j]) % M;
        } else {
          temp[i][j] += (dp[i][j - 1] % M);
        }
      }
    }
    dp = temp;
  }

  return paths;
};

