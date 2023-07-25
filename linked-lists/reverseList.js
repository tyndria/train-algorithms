/*
Reverse a singly linked list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Iterative
var reverseList = function(head) {
    if (!head) {
        return head;
    }
    
    let current = head.next;
    let prev = head;
    
    head.next = null;
  
    while (current) {
        const nextCurrent = current.next;
        current.next = prev;
        prev = current;
        current = nextCurrent;
    }
    
    return prev;
};

// Recursive
var reverseList = function(head) {
    if (!head) {
        return head;
    }
    
    const traverse = (current, prev) => {
        if (!current) {
            return prev;
        }
        let oldNext = current.next;
        current.next = prev;
        return traverse(oldNext, current);
    }
    
    return traverse(head, null);
};

var reverseList = function(head) {
    if (!head) {
        return head;
    }

    let reversedListHead = new ListNode(head.val);

    while (head) {
        const next = head.next;
        if (next) {
            const newReversedListNode = new ListNode(next.val);
            newReversedListNode.next = reversedListHead;
            reversedListHead = newReversedListNode;
        }

        head = head.next;
    }

    return reversedListHead;
};