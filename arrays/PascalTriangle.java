package algorithms.array;

import java.util.ArrayList;
import java.util.Arrays;

/* Given numRows, generate the first numRows of Pascal’s triangle.

Pascal’s triangle : To generate A[C] in row R, sum up A’[C] and A’[C-1] from previous row R - 1. */

public class PascalTriangle {
	public ArrayList<ArrayList<Integer>> generate(int A) {
		ArrayList<ArrayList<Integer>> result = new ArrayList();
		if (A <= 0) {
			return result;
		} else if (A >= 1) {
			result.add(new ArrayList(Arrays.asList(1)));
		} 
		if (A >= 2) {
			result.add(new ArrayList(Arrays.asList(1, 1)));
		}
		
		for (int i = 2; i < A; i ++) {
			ArrayList<Integer> previousRow = result.get(i - 1);
			int rowSize = previousRow.size() + 1;
			ArrayList<Integer> row = new ArrayList(rowSize);
			row.add(0, 1);
			for (int j = 1; j < rowSize - 1; j ++) {
				row.add(j, previousRow.get(j - 1) + previousRow.get(j));
			}
			row.add(rowSize - 1, 1);
			result.add(row);
		}
		
		return result;
    }
}
