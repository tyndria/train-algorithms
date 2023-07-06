// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {    
  let currentNode = new ListNode();
  let head = currentNode;

  while (list1 && list2) {
      currentNode.next = new ListNode();
      currentNode = currentNode.next;
      
      if (list1.val < list2.val) {
          currentNode.val = list1.val;
          list1 = list1.next;
      } else if (list2.val <= list1.val) {
          currentNode.val = list2.val;
          list2 = list2.next;
      }
  }

  currentNode.next = list1 ?? list2;

  return head.next;
};