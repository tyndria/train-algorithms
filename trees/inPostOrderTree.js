/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const buildTree = (inorder, postorder) => {
    const build = (subtreeValues, prevParentIndex, prevParentNode) => {
        const prevParentValue = postorder[prevParentIndex];
    
        const leftChildrens = subtreeValues.splice(0, prevParentValue);
        const rightChildrens = subtreeValues.splice(prevParentValue + 1, subtreeValues.length);

        const rightChildrenIndex = prevParentIndex - 1;
        const rightChildrenValue = postorder[rightChildrenIndex];
        const rightChildrenNode = new TreeNode(rightChildrenValue);
        prevParentNode.right = rightChildrenNode;
        build(rightChildrens, rightChildrenIndex, rightChildrenNode);

        const leftChildrenIndex = rightChildrenIndex - 1;
        const leftChildrenValue = postorder[leftChildrenIndex];
        const leftChildrenNode = new TreeNode(leftChildrenValue);
        prevParentNode.left = leftChildrenNode;
        build(leftChildrens, eftChildrenIndex, leftChildrenNode);
    }

};