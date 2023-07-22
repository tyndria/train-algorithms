// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    // O(n);
    const processedParagraph = paragraph.replace(/[!?,;.\']/g, ' ').toLowerCase();
    const words = processedParagraph.split(' ').filter(word => word.length > 0);
    
    // O(m)
    const bannedSet = new Set(banned);
    
    
    const wordsCount = {};
    
    // ~ ammortized O(n)
    for (const word of words) {
        if (!bannedSet.has(word)) {
            wordsCount[word] = (wordsCount[word] ?? 0) + 1;
        }
    }
    
    let most = { word: null, frequency: -1 };
    for (const [word, frequency] of Object.entries(wordsCount)) {
        if (most.frequency < frequency) {
            most = { word, frequency };
        }
    }
    
    return most.word;
};