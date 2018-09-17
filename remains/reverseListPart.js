/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = (head, m, n) => {
  if (m === n) {
    return head;
  }

  let currNode = head.next;
  let prevNode = head;
  let currIndex = 2;

  let beforeFirstNode = null;
  let firstNode = null;
  let newHead = null;

  if (!currNode.next) {
    prevNode.next = null;
    currNode.next = prevNode;
    return currNode;
  }

  if (m === 1) {
    firstNode = {...prevNode};
    newHead = firstNode;
  }


  while(currNode) {
    if (currIndex === m) {
      beforeFirstNode = prevNode;
      firstNode = {...currNode};
      newHead = firstNode;
    } else if (currIndex === n) {
      const prevHead = newHead;
      newHead = {...currNode};
      newHead.next = prevHead;

      if (beforeFirstNode) {
        beforeFirstNode.next = newHead;
      } else {
        head = newHead;
      }

      firstNode.next = {...currNode.next};
      break;
    } else {
      if (currIndex > m) {
        const prevHead = newHead;
        newHead = {...currNode};
        newHead.next = prevHead;
      }
    }
    prevNode = currNode;
    currNode = currNode.next;
    currIndex ++;
  }

  return head;
};