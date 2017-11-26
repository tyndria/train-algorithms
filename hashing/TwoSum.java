/* Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 < index2. 
Please note that your returned answers (both index1 and index2 ) are not zero-based. 
Put both these numbers in order in an array and return the array from your function ( Looking at the function signature will make things clearer ). 
Note that, if no pair exists, return empty list.

If multiple solutions exist, output the one where index2 is minimum. 
If there are multiple solutions with the minimum index2, choose the one with minimum index1 out of them. */

public class Solution {
	public ArrayList<Integer> twoSum(final List<Integer> a, int b) {
	    Map<Integer, Integer> map = new HashMap<Integer, Integer>();
	    
	    for (int i = 0; i < a.size(); i ++) {
	        int currentValue = a.get(i);
	        if (map.containsKey(b - currentValue)) {
	            int index = map.get(b - currentValue);
	            return new ArrayList(Arrays.asList(index + 1, i + 1));
	        } else {
	            if (!map.containsKey(currentValue)) {
	        		map.put(currentValue, i);
	        	}
	        }
	    }
	    
	    return new ArrayList();
	}
}
