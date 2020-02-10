/*
We are given two arrays A and B of words.  Each word is a string of lowercase letters.

Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity.  For example, "wrr" is a subset of "warrior", but is not a subset of "world".

Now say a word a from A is universal if for every b in B, b is a subset of a. 

Return a list of all universal words in A.  You can return the words in any order.
*/

/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
    const createMap = (words) => {
        const map = {};
        
        for (word of words) {
            map[word] = {};
            for (char of word) {
                if (map[word][char]) {
                    map[word][char] += 1;
                } else{
                    map[word][char] = 1;
                }
            }
        }
        
        return map;
    }
    
    const aggregateWords = (words) => {
        const commonMap = {};
        
        for (word of words) {
            const map = {};
            for (char of word) {
                if (!map[char]) {
                    map[char] = 1;
                } else {
                    map[char] += 1;
                }
                
                if (!commonMap[char]) {
                    commonMap[char] = map[char];
                } else {
                    commonMap[char] = Math.max(commonMap[char], map[char]);                
                }
            }
        }
        
        return commonMap;
    }
    
    const mapsA = createMap(A);
    const mapsB = aggregateWords(B);
    //console.log(mapsB)
    
    const result = [];
    
    for (a of A) {
        let isUniversal = true;
        for (char of Object.keys(mapsB)) {
            if (!mapsA[a][char] || mapsB[char] > mapsA[a][char]) {
                //console.log(a, b, char, mapsA, mapsB)
                isUniversal = false;
                break;
            }
        }
        
        if (isUniversal) {
            result.push(a);
        }
    }
    
    return result;
};