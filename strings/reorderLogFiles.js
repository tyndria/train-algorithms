/**
 * @param {string[]} logs
 * @return {string[]}
 * 
 * 

You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

There are two types of logs:

Letter-logs: All words (except the identifier) consist of lowercase English letters.
Digit-logs: All words (except the identifier) consist of digits.
Reorder these logs so that:

The letter-logs come before all digit-logs.
The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
The digit-logs maintain their relative ordering.
Return the final order of the logs.


 */
var reorderLogFiles = function(logs) {
  const isDigitLog = (log) => {
      const [_, ...tokens] = log.split(' ');
      return !isNaN(tokens[0]);
  }
  
  return logs.sort((logs1, logs2) => {
      const isLogs1Digit = isDigitLog(logs1);
      const isLogs2Digit = isDigitLog(logs2);
      
      if (isLogs1Digit && isLogs2Digit) {
          return 0;
      } else if (isLogs1Digit) {
          return 1;
      } else if (isLogs2Digit) {
          return -1;
      } 
      
      const [logsIdentifier1, ...tokens1] = logs1.split(' ');
      const [logsIdentifier2, ...tokens2] = logs2.split(' ');
      
      const joinedTokens1 = tokens1.join();
      const joinedTokens2 = tokens2.join();
      
      if (joinedTokens1 === joinedTokens2) {
          return logsIdentifier1.localeCompare(logsIdentifier2);
      } 
      
      return joinedTokens1.localeCompare(joinedTokens2);
  });
};