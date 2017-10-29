// Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

public class InterleavingStrings {
	public static int isInterleave(String a, String b, String c) {
	    if (c.length() < (a.length() + b.length())) {
	        return 0;
	    } else {
	        int n = a.length();
	        int m = b.length();
	        int[][] interleave = new int[n + 1][m + 1];
	        interleave[0][0] = 1;
	        
	        for (int i = 0; i <= n; i ++) {
	            for (int j = 0; j <= m; j ++) {
	            	if (interleave[i][j] == 1) {
	            		int k = i + j;
		                if (i != (n) && a.charAt(i) == c.charAt(k)) {
		                    interleave[i + 1][j] = 1;
		                } 
		                if (j != (m) && b.charAt(j) == c.charAt(k)) {
		                    interleave[i][j + 1] = 1;
		                }
	            	}
	            }
	        }
	        return interleave[n][m];
	    }
	}
}
