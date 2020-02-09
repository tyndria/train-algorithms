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
    const result = [];
    
    const bruteForce = (s, index) => {
        if (index >= S.length) {
            result.push(s);
            return;
        }
       
        const char = S[index];
        if (char >= '0' && char <= '9') {
            bruteForce(s + char, index + 1);
        } else {
            const charToUpdate = char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
            const updatedString = s + charToUpdate;

            bruteForce(updatedString, index + 1)
            bruteForce(s + char, index + 1);
        }
    };
    
    bruteForce("", 0);
    
    return result;
};