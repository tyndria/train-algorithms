/*
We are given head, the head node of a linked list containing unique integer values.

We are also given the list G, a subset of the values in the linked list.

Return the number of connected components in G, where two values are connected if they appear consecutively in the linked list.
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
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
    const S = new Set(G);
    
    let current = head;
    
    let counter = 0;
    let connectedComponent = false;
    
    while (current) {
        if (S.has(current.val) && !connectedComponent) {
            counter ++;
            connectedComponent = true;
        } else if (!S.has(current.val)) {
            connectedComponent = false;
        }
    
        current = current.next;
    }
    
    return counter;
};