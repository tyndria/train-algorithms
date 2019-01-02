/*

Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

*/

function swapPairs(A){
    var currNode = A.next;
    var prevNode = A;
    
    while (currNode !== null) {
        var buf = prevNode.data;
        prevNode.data = currNode.data;
        currNode.data = buf;
        
        prevNode = currNode.next;
        if (prevNode === null) {
            break;
        }
        currNode = prevNode.next;
    }
    
    return A;
}