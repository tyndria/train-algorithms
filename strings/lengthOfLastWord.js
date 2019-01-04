/*

Length of Last Word

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

*/


function lengthOfLastWord(A) {
    var lastLength = 0, currLength = 0;
    var spaceNumber = 0;
    
    for (var i = 0; i < A.length; i ++) {
        var char = A[i];
       
        if (char !== ' ') {
            currLength ++;
            spaceNumber = 0;
        } else {
            spaceNumber ++;
            
            if (spaceNumber === 1) {
                lastLength = currLength;
                currLength = 0;
            }
        }
    }
    
    if (A[A.length - 1] !== ' ') {
        lastLength = currLength;
    }
    
    return lastLength;
}