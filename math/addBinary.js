/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 
 * Given two binary strings a and b, return their sum as a binary string.
 * 
 */
var addBinary = function(a, b) {
  let result = "";

  const getDigitFromEnd = (str, i) => {
      return Number(str[str.length - i - 1]);
  }

  const fullfillString = (str, length) => {
      const additionalLength = length - str.length;
      return `${new Array(additionalLength).fill("0").join("")}${str}`;
  }

  const maxLength = Math.max(a.length, b.length);

  a = fullfillString(a, maxLength);
  b = fullfillString(b, maxLength);

  let residual = 0;
  for (let i = 0; i < maxLength; i ++) {
      const sum = getDigitFromEnd(a, i) + getDigitFromEnd(b, i) + residual;
      residual = Number(sum > 1);
      result = (sum % 2).toString() + result;
  }

  if (residual) {
      result = "1" + result;
  } 

  if (result.length <= 1) {
      return result;
  }

  let leadingZeroesIndex = 0;

  while (result[leadingZeroesIndex] === '0'){
      leadingZeroesIndex += 1;
  }

  return result.slice(leadingZeroesIndex);
};