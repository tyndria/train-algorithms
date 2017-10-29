/* Given two words A and B, find the minimum number of steps required to convert A to B. (each operation is counted as 1 step.)

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character */

public class EditDistance {
	public int minDistance(String a, String b) {
		   int n = a.length();
		   int m = b.length();
		   int[][] distance = new int[n + 1][m + 1];
		   
		   for (int i = 0; i <= n; i ++) {
		       for (int j = 0; j <= m; j ++) {
		           if (i == 0) {
		               distance[i][j] = j;
		           } else if (j == 0) {
		        	   distance[i][j] = i;
		           } else {
		        	   if (a.charAt(i - 1) == b.charAt(j - 1)) {
			               distance[i][j] = distance[i - 1][j - 1];
			           } else {
			               int edit = distance[i - 1][j - 1];
			               int insert = distance[i][j - 1];
			               int remove = distance[i - 1][j];
			               distance[i][j] = 1 + Math.min(Math.min(edit, insert), remove);
			           }
		           }
		       }
		   }
		   
		   return distance[n][m];
	}

}
