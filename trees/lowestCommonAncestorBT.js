// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”


// recursive approach

var lowestCommonAncestor = function(root, p, q) {
    let resultNode;
    
    const traverse = (node) => {
        if (!node) {
            return false;
        }
        
        const foundInLeft = Number(traverse(node?.left));
        const foundInRight = Number(traverse(node?.right));
        
        const foundInCurrent = Number(node.val === p.val || node.val === q.val);
        
        const flagsResult = foundInLeft + foundInRight + foundInCurrent;
        
        if (flagsResult >= 2) {
            resultNode = node;
        }
        
        return flagsResult > 0;
    }
    
    
    traverse(root);
    
    
    return resultNode;
};