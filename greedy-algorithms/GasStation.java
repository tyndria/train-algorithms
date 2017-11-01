import java.util.List;

/*There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the minimum starting gas station’s index if you can travel around the circuit once, otherwise return -1.

You can only travel in one direction. i to i+1, i+2, ... n-1, 0, 1, 2..
Completing the circuit means starting at i and ending up at i again.*/

public class GasStation {
	
	// Improve solution after submit previous and open the right one
	public int canCompleteCircuit2(final List<Integer> gas, final List<Integer> cost) {
	    int n = gas.size();
	    
	    int gasSum = gas.stream().mapToInt(i -> i).sum();
	    int costSum = cost.stream().mapToInt(i -> i).sum();
	    
	    if (gasSum - costSum < 0) {
	        return -1;
	    }
	    
	    if (n == 1) {
	        return (gasSum - costSum) >= 0 ? 0 : -1;
	    }
	    
	    int currentFuel = 0;
	    int remaining = 0;
	    int total = 0;
	    int start = 0;
	    for (int i = 0; i < n; i ++) {
	    	remaining = gas.get(i) - cost.get(i);
	    	if (currentFuel >= 0) {
	    		currentFuel += remaining;
	    	} else {
	    		currentFuel = remaining;
	    		start = i;
	    	}
	    	total += remaining;
	    }
	    return total >= 0 ? start : -1;
	}

	/* My initial solution (ugly, frankly); It could be more simple
	We do not need to start cycle again. 
	We need just to go through it one time, it's enough */
	public int canCompleteCircuit(final List<Integer> gas, final List<Integer> cost) {
	    int n = gas.size();
	    
	    int gasSum = gas.stream().mapToInt(i -> i).sum();
	    int costSum = cost.stream().mapToInt(i -> i).sum();
	    
	    if (gasSum - costSum < 0) {
	        return -1;
	    }
	    
	    if (n == 1) {
	        return (gasSum - costSum) >= 0 ? 0 : -1;
	    }
	    
	    int index = 0;
	    int sum = 0;
	    int i = -1;
	    boolean startNewCycle = true;
	    boolean doingCycle = false;
	    while (true) {
	    	if (startNewCycle) {
	    		i = index;
	    		startNewCycle = false;
	    	}
	    	int diff = gas.get(i) - cost.get(i);
	        sum += diff;
	        if (sum < 0) {
	            sum = 0; 
	            index = i + 1;
	            startNewCycle = true;
	        } else {
	        	if (i == (n - 1)) {
	        		i = 0;
	        		doingCycle = true;
	        	} else if (i == index && doingCycle){
	        		return index;
	        	} else {
	        		i ++;
	        	}
	        }
	    }
	}
	
	
}
