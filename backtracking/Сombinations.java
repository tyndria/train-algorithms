/* Given two integers n and k, return all possible combinations of k numbers out of 1 2 3 ... n.

Make sure the combinations are sorted. */

public class Combinations {
	public Stack<Integer> comb = new Stack<Integer>();
	public ArrayList<ArrayList<Integer>> result = new ArrayList();
	public int k;
	public int n;

	public ArrayList<ArrayList<Integer>> combine(int n, int k) {
		this.k = k;
		this.n = n;

		if (n == k) {
			ArrayList<Integer> oneVariant = new ArrayList<Integer>();
			for (int i = 0; i < n; i++) {
				oneVariant.add(i + 1);
			}
			result.add(oneVariant);
		} else if (k > n) {
			return result;
		} else {
			search(0);
		}

		return result;
	}

	public void search(int index) {
		if (index != n + 1) {
			if (comb.size() == k) {
				result.add(new ArrayList(comb));
			} else {
				comb.push(index + 1);
				search(index + 1);
				comb.pop();
				search(index + 1);
			}
		}
	}
}
