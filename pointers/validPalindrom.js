/*

Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

*/


/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindromeVersion1 = (s) => {
    // 48 - 57 numbers
    // 97 - 122 lowercase letter 
    const isAlphanumeric = (c) => {
        const isNumber = c <= 57 && c >= 48;
        const isLetter = c <= 122 && c >= 97;
        
        return isNumber || isLetter;
    }
    
    s = s.toLowerCase();
    
    let left = 0;
    let right = s.length - 1;
    
    while (left <= right) {
        while(!isAlphanumeric(s.charCodeAt(left)) && left <= right) {
            left ++;
        }
        
        while(!isAlphanumeric(s.charCodeAt(right)) && left <= right) {
            right --;
        }
        
        const leftPointer = s.charCodeAt(left);
        const rightPointer = s.charCodeAt(right);
        
        if (isAlphanumeric(leftPointer) && isAlphanumeric(rightPointer)) {
            if (s[left] !== s[right]) {
                return false;
            }
            
            left ++;
            right --;
        }
    }
    
    return true;
};


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromeVersion2 = function(s) {
    const valid = (index) => {
        const c = s.charCodeAt(index);

        const isNumber = c <= 57 && c >= 48;
        const isLowercaseLetter = c <= 122 && c >= 97;
        const isUppercaseLetter = c <= 90 && c >= 65;
        
        if (isNumber || isLowercaseLetter || isUppercaseLetter) {
            return s[index].toLowerCase();
        }

        return false;
    }
    
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (!valid(left)) {
            left ++;
        } else if (!valid(right)) {
            right --;
        } else if (valid(left) !== valid(right)) {
            return false;
        } else {
            left ++;
            right --;
        }
    }

    return true;
};