/*
On an alphabet board, we start at position (0, 0), corresponding to character board[0][0].

Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"].

We may make the following moves:

'U' moves our position up one row, if the position exists on the board;
'D' moves our position down one row, if the position exists on the board;
'L' moves our position left one column, if the position exists on the board;
'R' moves our position right one column, if the position exists on the board;
'!' adds the character board[r][c] at our current position (r, c) to the answer.
(Here, the only positions that exist on the board are positions with letters on them.)

Return a sequence of moves that makes our answer equal to target in the minimum number of moves.  You may return any path that does so.
*/

/*
/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
  const getOrder = (c) => {
      const charCode = c.charCodeAt(0);
      return charCode - "a".charCodeAt(0);
  }
  
  const fill = (n, c) => new Array(Math.abs(n)).fill(c);
  
  let result = [];
      
  const ROW_SIZE = 5;
  const Z_ROW = 5;
  
  let prevRow = 0;
  let prevCol = 0;
  for (char of target) {
      const order = getOrder(char);
      const col = order % ROW_SIZE;
      const row = Math.floor(order / ROW_SIZE);
      
      const verticallyFirst = row !== Z_ROW;
      
      const verticalStepsNumber = row - prevRow;
      const verticalStepSign = verticalStepsNumber > 0 ? 'D' : 'U';
      const horizontalStepsNumber = col - prevCol;
      const horizontalStepSign = horizontalStepsNumber > 0 ? 'R': 'L';
      
      const verticalSteps = fill(verticalStepsNumber, verticalStepSign);
      const horizontalSteps = fill(horizontalStepsNumber, horizontalStepSign);
      
      if (verticallyFirst) {
          result = result.concat(verticalSteps, horizontalSteps, '!');
      } else {
          result = result.concat(horizontalSteps, verticalSteps, '!');
      }
      
      
      prevRow = row;
      prevCol = col;
  }
  
  return result.join("");
};