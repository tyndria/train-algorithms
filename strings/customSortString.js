/*
S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

Return any permutation of T (as a string) that satisfies this property.
*/

// O(nlogn), n = T.length

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    const alphabet = {};
    
    let order = 0;
    for (c of S) {
        alphabet[c] = ++order;
    }
    
    const letters = T.split("");
    
    letters.sort((a, b) => {
        const aOrder = alphabet[a] || -1;
        const bOrder = alphabet[b] || -1;
        return aOrder - bOrder;
    });
    
    return letters.join("");
};

// O (T.length + S.length)

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    const count = {};
    
    for (c of T) {
        count[c] = count[c] + 1 || 1;
    }
    
    let result = [];
    for (c of (S + T)) {
        if (count[c]) {
            result = result.concat(new Array(count[c]).fill(c));
            count[c] = 0;
        }
    }
    
    return result.join("");
};