/* Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? 
Find all unique quadruplets in the array which gives the sum of target. */

// THERE IS ONE BUG (check case, when array consists if zeroes)
// The order of arrays in result array is wrong
// The code in cumbersom :(

class Solution {
	public ArrayList<ArrayList<Integer>> fourSum(ArrayList<Integer> a, int b) {
	    ArrayList<ArrayList<Integer>> result = new ArrayList();
	    if (a.size() < 4) {
	    	return result;
	    } 
	    
	    Map<Integer, ArrayList<ArrayList<Integer>>> twoSumMap = new HashMap();
	    
	    // precalculate sum of two integers
	    for (int i = 0; i < a.size(); i ++) {
	       for (int j = 0; j < a.size(); j ++) {
	           if (i != j && i < j) {
	               int sum = a.get(i) + a.get(j);
	               if (twoSumMap.containsKey(sum)) {
	                   ArrayList<ArrayList<Integer>> indices = twoSumMap.get(sum);
	                   indices.add(new ArrayList(Arrays.asList(i, j)));
	               } else {
	                   ArrayList<ArrayList<Integer>> indices = new ArrayList();
	                   indices.add(new ArrayList(Arrays.asList(i, j)));
	                   twoSumMap.put(sum, indices);
	               }
	           }
	       }
	    }
	  
	    ArrayList<Integer> twoSums = new ArrayList();
	    twoSums.addAll(twoSumMap.keySet());
	    Collections.sort(twoSums);
	    
	    Map<Integer, Integer> hashCodeMap = new HashMap();
	    
	    int i = 0, j = twoSums.size() - 1;
	    while (i != j) {
	    	int firstSum = twoSums.get(i);
	    	int secondSum = twoSums.get(j);
	    	if (firstSum + secondSum < b) {
	    		i ++;
	    	} else if (firstSum + secondSum > b) {
	    		j --;
	    	} else {
	    		ArrayList<ArrayList<Integer>> t1 = twoSumMap.get(firstSum);
	            ArrayList<ArrayList<Integer>> t2 = twoSumMap.get(secondSum);
	            
	            for (int l = 0; l < t1.size(); l ++) {
	                for (int k = 0; k < t2.size(); k ++) {
	                    ArrayList<Integer> p1 = t1.get(l);
	                    ArrayList<Integer> p2 = t2.get(k);
	                    if (!makeIntersection(p1, p2)) {
	                        ArrayList<Integer> fourSum = new ArrayList();
	                        fourSum.addAll(p1);
	                        fourSum.addAll(p2);
	                        
	                        ArrayList<Integer> elements = (ArrayList<Integer>) fourSum.stream().map(index -> a.get(index)).collect(Collectors.toList());
	                        Collections.sort(elements);
	                        
	                        int hashCode = elements.hashCode();
	                        if (!hashCodeMap.containsKey(hashCode)) {
	                        	result.add(elements);
	                        	hashCodeMap.put(hashCode, 0);
	                        }
	                    } 
	                }
	            }
	            
	            i ++;
	    	}
	    }
	    
	    return result;
	}
	
	// For arrays of size 2
	public boolean makeIntersection(ArrayList<Integer> p1, ArrayList<Integer> p2) {
	    Collections.sort(p1);
	    Collections.sort(p2);
	    
	    for (int i = 0; i < p1.size(); i ++) {
	    	for (int j = 0; j < p2.size(); j ++) {
	    		if (p1.get(i) == p2.get(j)) {
		            return true;
		        }
	    	}
	    }
	    
	    return false;
	}
}
