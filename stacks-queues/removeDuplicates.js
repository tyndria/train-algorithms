/*
Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

We repeatedly make duplicate removals on S until we no longer can.

Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.
*/

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    if (S.length === 1) {
        return S;
    }
    
    const stack = [];
    
    for (let i = 0; i < S.length; i ++) {
        const current = S[i];
        
        if (stack.length && stack[stack.length - 1] === current) {
            stack.pop();
        } else {
            stack.push(current);
        }
    }
    
    return stack.join('');
};