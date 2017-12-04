
/* Merge k sorted linked lists and return it as one sorted list. */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     public int val;
 *     public ListNode next;
 *     ListNode(int x) { val = x; next = null; }
 * }
 */
 
public class MergeLists {
	public ListNode mergeKLists(ArrayList<ListNode> a) {
		if (a.size() == 0) {
			return null;
		}
		PriorityQueue<ListNode> queue = 
		    new PriorityQueue<ListNode>(a.size(), (n1, n2) -> n1.val - n2.val);
		ListNode headNode = null;
		ListNode currNode = null;

		for (int i = 0; i < a.size(); i ++) {
		   queue.offer(a.get(i));
		}

		while (queue.size() > 0) {
		   ListNode top = queue.poll();

		   if (headNode == null) {
		       headNode = top;

		       currNode = top;
		   } else {
		       currNode.next = top;

		       currNode = currNode.next;
		   }

		   if (top.next != null) {
		       queue.offer(top.next);
		   }
		}

		return headNode;
	}
}
