/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const queue = [{ node: root, level: 0}];
    
    const result = [];
    
    let currentLevel = 0;
    let currentSum = 0;
    let currentLevelCount = 0;
    
    while (queue.length) {
        const { node, level } = queue.shift();
        
        if (node) {
            if (level !== currentLevel) {
                currentLevel = level;
                result.push(currentSum / currentLevelCount);
                currentSum = 0;
                currentLevelCount = 0;
            }
            currentSum += node.val;
            currentLevelCount += 1;

            queue.push({ node: node.left, level: level + 1 });
            queue.push({ node: node.right, level: level + 1 });
        }
    }
    
    // last level
    if (currentLevelCount !== 0) {
        result.push(currentSum / currentLevelCount);
    }
    
    return result;
};