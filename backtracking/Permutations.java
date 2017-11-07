import java.util.ArrayList;
import java.util.Stack;

/*Given a collection of numbers, return all possible permutations.*/

public class Permutations {
	public Stack<Integer> permutation = new Stack();
	public int n;
	public ArrayList<Integer> initArray;
	public ArrayList<ArrayList<Integer>> result = new ArrayList();
	public boolean[] chosen;

	public ArrayList<ArrayList<Integer>> permute(ArrayList<Integer> a) {
		this.n = a.size();
		this.chosen = new boolean[n];
		this.initArray = a;
		search();

		return result;
	}

	public void search() {
		if (permutation.size() == this.n) {
			result.add(new ArrayList(permutation.subList(0, permutation.size())));
		} else {
			for (int i = 0; i < n; i++) {
				if (chosen[i]) {
					continue;
				}
				chosen[i] = true;
				permutation.push(initArray.get(i));
				search();
				permutation.pop();
				chosen[i] = false;
			}
		}
	}
}
