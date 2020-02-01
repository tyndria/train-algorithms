/*

Letter Case Permutation

Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  
Return a list of all possible strings we could create.

*/


/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let result = [];
    
    const isNumber = (c) => {
        return c >= '0' && c <= '9';
    }
    
    const recurse = (s, i) => {
        if (i < S.length)  {
            const char = s[i];
            
            if (!isNumber(char)) {
                let newChar = char;
                
                if (char !== char.toLowerCase()) {
                    newChar = char.toLowerCase();
                } else {
                    newChar = char.toUpperCase();
                }
                
                newString = s.substring(0, i) + newChar + s.substring(i + 1);
                
                result.push(newString);
                recurse(newString, i + 1);
            }
            
            recurse(s, i + 1);
        }
    }
  
    result.push(S);
    recurse(S, 0);
    
    return result;
};