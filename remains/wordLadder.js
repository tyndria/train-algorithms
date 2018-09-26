/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

/* Solution took approximately 1200 ms */
const ladderLength = (beginWord, endWord, wordList) => {
  const isSiblingNode = (initNode, nodeToCheck) => {
    let counter = 0;
    for(let i = 0; i < initNode.length; i ++) {
      if (initNode[i] !== nodeToCheck[i]) {
        counter ++;
        if (counter > 1) {
          return false;
        }
      }
    }
    return true;
  }


  const startMutations = (beginWord, endWord, wordList) => {
    let possMutations = [...wordList];
    const queue = [beginWord];
    const distances = {};

    while(queue.length) {
      const newWord = queue.shift();
      const currDistance = distances[newWord] ? distances[newWord].value : 1;

      let haveAnswer = false;
      possMutations = possMutations.filter((possSibling) => {
        if (isSiblingNode(newWord, possSibling)) {
          if (possSibling === endWord) {
            haveAnswer = true;
          } else {
            if (distances[possSibling]) {
              const prevDistance = distances[possSibling].value;
              distances[possSibling].value = Math.min(currDistance + 1, prevDistance);
              return true;
            }
            distances[possSibling] = {value: currDistance + 1};
            queue.push(possSibling);
            return false;
          }
        }
        return true;
      })

      if (haveAnswer) {
        return currDistance + 1;
      }
    }

    return 0;
  }

  return startMutations(beginWord, endWord, wordList);
};

const result = ladderLength('hit', 'cog', ["hot","dot","dog","lot","log"])

console.log(result)