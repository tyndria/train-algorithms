public class PalindromePartitioning{
    ArrayList<ArrayList<String>> result = new ArrayList();
    int n;
    String s;
    
	public ArrayList<ArrayList<String>> partition(String a) {
	    n = a.length();
	    s = a;
	    solve(0, new ArrayList());
	    return result;
	}
	
	public void solve(int startIndex, ArrayList<String> a) {
	    if (startIndex >= n) {
	        result.add(a);
	    } else {
	        for (int i = startIndex; i - startIndex <= n && i < n; i ++) {
	        	ArrayList<String> array = new ArrayList(a);
	            String substr = s.substring(startIndex, i + 1);
	            if (isPalindrome(substr)) {
	                array.add(substr);
	                solve(i + 1, array);
	            }
	        }
	    }
	}
	
	public boolean isPalindrome(String s) {
	    int i = 0;
	    int j = s.length() - 1;
	    while (i != (j - 1) && (i != j)) {
	        if (s.charAt(i) != s.charAt(j)) {
	            return false;
	        }
	        i ++;
	        j --;
	    }
	    
	    if (i == (j - 1)) {
	        return s.charAt(i) == s.charAt(j);
	    }
	    
	    return true;
	}
}
