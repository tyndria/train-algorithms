
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Recursion
var hasCycle = function(head) {
  if (!head) {
      return false;
  }

  const recurse = (slowPointer, fastPointer) => {
      if (!fastPointer || !slowPointer) {
          return false;
      }

      if (fastPointer === slowPointer) {
          return true;
      }

      return recurse(slowPointer.next, fastPointer.next?.next);
  }

  return recurse(head.next, head.next?.next);
};


// Cycle
var hasCycle = function(head) {
  let fastPointer = head;
  let slowPointer = head;

  if (!head) {
      return false;
  }

  let result = false;

  while (true) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next?.next;

      if (!fastPointer || !slowPointer) {
          break;
      }
      
      if (fastPointer === slowPointer) {
          result = true;
          break;
      }
  }

  return result;
};