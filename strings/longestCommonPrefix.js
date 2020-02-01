/*
Longest Common Prefix


Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

*/


/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    if (strs.length === 0) {
        return "";
    } else if (strs.length === 1) {
        return strs[0];
    }
    
    let i = 0;
	
    let isPrefixEnd = false
	while (true) {
        for (let j = 0; j < strs.length - 1; j ++) {
                if (i >= strs[j].length || i >= strs[j + 1].length || 
                        strs[j][i] !== strs[j + 1][i]) {
                    isPrefixEnd = true;
                    break;
                } 
        }
        
        if (isPrefixEnd) {
            break;
        }
        
        i ++;
    }

    return strs[0].substring(0, i);

};


/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    if (strs.length === 0) {
        return "";
    } else if (strs.length === 1) {
        return strs[0];
    }
    
    for (let i = 0; i < strs[0].length; i ++) {
        const char = strs[0][i];
        
        for (let j = 1; j < strs.length; j ++) {
            if (i === strs[j].length || char !== strs[j][i]) {
                return strs[0].substring(0, i); 
            }
        }
    }
    
    return strs[0];
};

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    if (strs.length === 0) {
        return "";
    } 
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i ++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.substring(0, prefix.length - 1);
            
            if (!prefix.length) {
                return "";
            }
        }
    }
    
    return prefix;
};