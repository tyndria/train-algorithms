/* Given two sequences S, T, count number of unique ways in sequence S, to form a subsequence that is identical to the sequence T. */

// This solution is not really good, actually. It could be shorter

public class DistinctSunsequences {
	public int numDistinct(String S, String T) {
		if (S.length() < T.length()) {
			return 0;
		} else if (S.length() == T.length()) {
			if (S.equals(T)) {
				return 1;
			} else {
				return 0;
			}
		} else {
			int n = T.length();
			int m = S.length();

			int d[][] = new int[n][m];

			for (int i = 0; i < n; i++) {
				for (int j = 0; j < m; j++) {
					if (T.charAt(i) == S.charAt(j)) {
						if (i == 0) {
							d[i][j] = 1;
						} else {
							for (int k = 0; k < j; k++) {
								if (d[i - 1][k] > 0) {
									d[i][j] = d[i][j] + d[i - 1][k];
								}
							}
						}
					}
				}

			}

			int sum = 0;
			for (int i = 0; i < m; i++) {
				sum += d[n - 1][i];
			}
			return sum;
		}
	}
}
