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


// LEETCODE ACCEPTS NOT TREE, IT ACCEPTS AN ARRAY OF ELEMENTS, RECEIVING AFTER BREADTH FIRST SEARCH
// YOU ALSO NEED TO ADD NULL ELEMENTS, FOR EXAMPLE
// INPUT: [9,3,15,20,7], [9,15,7,20,3]
// OUTPUT: [3,9,20,null,null,15,7]

// :(

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const findTreeDepth = (treeTop) => {
  const findMax = (node) => {
    if (!node) {
      return 0
    } else {
      return Math.max(findMax(node.left), findMax(node.right)) + 1
    }
  }

  return findMax(treeTop)
}

const buildTreeArray = (treeTop) => {
  const treeDepth = findTreeDepth(treeTop)

  const nodes = []
  const queue = [{...treeTop, level: 1}]

  while (queue.length !== 0) {
    const {val, left, right, nullChild = false, level} = queue.shift()

    if (level <= treeDepth) {
      nodes.push(nullChild ? 'null' : val)

      if (!left) {
        queue.push({nullChild: true, left: null, right: null, level: level + 1})
      } else {
        queue.push({...left, level: level + 1})
      }

      if (!right) {
        queue.push({nullChild: true, left: null, right: null, level: level + 1})
      } else {
        queue.push({...right, level: level + 1})
      }
    } else {
      break;
    }
  }

  return nodes
}

const buildTree = (inorder, postorder) => {
  const build = (subtreeValues, prevParentIndex, prevParentNode) => {
    if (prevParentIndex > 0) {
      const prevParentValue = postorder[prevParentIndex]

      const dividerIndex = subtreeValues.findIndex(x => x === prevParentValue)
      const leftChildren = subtreeValues.slice(0, dividerIndex)
      const rightChildren = subtreeValues.slice(dividerIndex + 1, subtreeValues.length)

      if (rightChildren.length) {
        const rightChildrenIndex = prevParentIndex - 1
        const rightChildrenValue = postorder[rightChildrenIndex]
        const rightChildrenNode = new TreeNode(rightChildrenValue)
        prevParentNode.right = rightChildrenNode
        build(rightChildren, rightChildrenIndex, rightChildrenNode)
      }

      if (leftChildren.length) {
        let leftChildrenIndex = prevParentIndex - 1
        while (!leftChildren.find(x => x === postorder[leftChildrenIndex])) {
          leftChildrenIndex--
        }
        const leftChildrenValue = postorder[leftChildrenIndex]
        const leftChildrenNode = new TreeNode(leftChildrenValue)
        prevParentNode.left = leftChildrenNode
        build(leftChildren, leftChildrenIndex, leftChildrenNode)
      }
    }
  }

  const topNode = new TreeNode(postorder[postorder.length - 1])

  build(inorder, postorder.length - 1, topNode)

  return buildTreeArray(topNode)
};