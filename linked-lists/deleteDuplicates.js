/*

Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.

*/

function deleteDuplicates(A) {
    var currNode = A;
    var prevNode = A;
    while (prevNode.next !== null) {
        currNode = prevNode.next;
        if (currNode.data == prevNode.data) {
            prevNode.next = currNode.next;
        } else {
            prevNode = currNode;
        }
    }
    
    return A;
}