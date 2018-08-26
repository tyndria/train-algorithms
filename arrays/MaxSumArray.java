package algorithms.array;

import java.util.ArrayList;
import java.util.List;

/*Find the contiguous subarray within an array (containing at least one number) which has the largest sum.*/

public class MaxSumArray {
	public int maxSubArray(final List<Integer> A) {
		if (A.size() == 1) {
			return A.get(0);
		} 
		
        ArrayList<Integer> precalculated = new ArrayList();
        precalculated.add( A.get(0));
        for (int i = 1; i < A.size(); i ++) {
            precalculated.add(A.get(i) + precalculated.get(i - 1));
        }
        
        int maxSum = Integer.MIN_VALUE;
        int minSum = 0;
        
        for (int i = 0; i < A.size(); i ++) {
        	int sum = precalculated.get(i);
        	maxSum = Math.max(maxSum, sum - minSum);
        	minSum = Math.min(minSum, sum);
        }
        
        return maxSum;
    }
}

