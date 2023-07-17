// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let resultList = new ListNode();
  
  const recurse = (node1, node2, resultNode, residue) => {
      const result = (node1?.val ?? 0) + (node2?.val ?? 0) + residue;
      const newResidue = result >= 10 ? 1 : 0;
      
      resultNode.val = result % 10;
      
      if (node1?.next || node2?.next || newResidue) {
          resultNode.next = new ListNode();
          recurse(node1?.next, node2?.next, resultNode.next, newResidue);
      }
  }
  
  recurse(l1, l2, resultList, 0);
  
  return resultList;
};