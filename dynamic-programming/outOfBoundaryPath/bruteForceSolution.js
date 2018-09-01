/* This solution is not accepted as it exceeds time limitation */
const findPaths = function(m, n, N, i, j) {
  let paths = 0;

  const nextSteps = (i, j, k) => {
    if (k <= N) {
      if (i + 1 === m) {
        paths ++;
      } else {
        nextSteps(i + 1, j, k + 1);
      }

      if (i - 1 === -1) {
        paths ++;
      } else {
        nextSteps(i - 1, j, k + 1);
      }

      if (j + 1 === n) {
        paths ++;
      } else {
        nextSteps(i, j + 1, k + 1);
      }
      if (j - 1 === -1) {
        paths ++;
      } else {
        nextSteps(i, j - 1, k + 1);
      }
    }
  }

  nextSteps(i, j, 1);
  return paths;
};