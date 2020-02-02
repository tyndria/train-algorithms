/*
In a warehouse, there is a row of barcodes, where the i-th barcode is barcodes[i].

Rearrange the barcodes so that no two adjacent barcodes are equal.  You may return any answer, and it is guaranteed an answer exists.
*/

// O(nlogn)
/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    const freqMap = {};
    for (b of barcodes) {
        if (freqMap[b]) {
            freqMap[b].count += 1;
        } else {
            freqMap[b] = {
                count: 1,
                key: b,
            };
        }
    }

    const sortedFreqs = Object.values(freqMap).sort((a, b) => b.count - a.count);
    const result = [];
    let j = 0;
    for (let i = 0; i < barcodes.length; i += 2) {
        if (!sortedFreqs[j].count) {
            j += 1;
        }
        result[i] = sortedFreqs[j].key;
        sortedFreqs[j].count -= 1;
    }
    for (let i = 1; i < barcodes.length; i += 2) {
        if (!sortedFreqs[j].count) {
            j += 1;
        }
        result[i] = sortedFreqs[j].key;
        sortedFreqs[j].count -= 1;
    }
    
    return result;
};

// O(n)

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    const freqMap = {};
    let mostFreqCode = 0;
    let maxFreq = 0;
    
    for (b of barcodes) {
        if (!freqMap[b]) {
            freqMap[b] = 0;
        }
        
        freqMap[b] += 1;
        if (freqMap[b] > maxFreq) {
            maxFreq = freqMap[b];
            mostFreqCode = b;
        }
    }

    const result = [];
    let i = 0;
    while (i < barcodes.length && maxFreq > 0) {
        result[i] = mostFreqCode;
        i += 2;
        maxFreq -= 1;
    }
    
    delete freqMap[mostFreqCode];
    
    if (i >= barcodes.length) {
        i = 1;
    }
    
    for (key of Object.keys(freqMap)) {
        while (freqMap[key] > 0 && i < barcodes.length) {
            result[i] = key;
            i += 2;
            freqMap[key] -= 1;
            
            if (i >= barcodes.length) {
                i = 1;
            }
        }
    }
    
    return result;
};