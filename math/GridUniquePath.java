package algorithms.math;

import java.math.BigInteger;

/* A robot is located at the top-left corner of an A x B grid (marked ‘Start’ in the diagram below).
The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked ‘Finish’ in the diagram below).

How many possible unique paths are there? */

public class GridUniquePath {
	public int uniquePaths(int A, int B) {
        return combinations(A - 1, A + B - 2);
    }
    
    int combinations(int k, int n) {
    	int result = factorial(n).divide((factorial(k).multiply(factorial(n - k)))).intValue();
        return result;
    }
    
    BigInteger factorial(int n) {
    	BigInteger N = BigInteger.valueOf((long)n);
        if (n == 1) {
            return BigInteger.ONE;
        } else if (n == 0) {
            return BigInteger.ONE;
        }
      
        BigInteger result = BigInteger.ONE;
        BigInteger i;
        for(i = N; i.compareTo(BigInteger.ONE) > 0; i = i.subtract(BigInteger.ONE)) {
        	result = result.multiply(i);
        }
        
        return result;
    }
}
