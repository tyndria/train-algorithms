/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// WITH COUNTING LENGTH SOLUTION
var rotateRight = function(head, k) {
    if (k == 0 || !head) {
        return head;
    }
    
    let length = 1;
    
    let current = head;
    while (current.next) {
        current = current.next;
        length += 1;
    }
    
    current.next = head;
    
    let numberOfSteps = 0;
    if (k  > length) {
        numberOfSteps = length - k % length;
    } else {
        numberOfSteps = length - k;
    }
    
    let root = current;
    let result = null;
    for (let i = 0; i < numberOfSteps; i ++) {
        root = root.next;
    }
    result = root.next;
    root.next = null;
    return result;
};