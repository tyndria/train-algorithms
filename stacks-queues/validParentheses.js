/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const characters = Array.from(s);
  if (characters.length < 2) {
    return false;
  }

  const stack = [];

  const closingBracket = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const character of characters) {
    if (character === "(" || character === "[" || character === "{") {
      stack.push(character);
    } else {
      const openingBracket = stack.pop();
      if (closingBracket[openingBracket] === character) {
        continue;
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
