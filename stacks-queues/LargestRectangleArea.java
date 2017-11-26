/* Given n non-negative integers representing the histogram’s bar height where the width of each bar is 1, find the area of largest rectangle in the histogram. */

public class LargestRectangleArea {
	public int largestRectangleArea(ArrayList<Integer> a) {
	    int n = a.size();
	    Stack<Integer> stack = new Stack();
	    int maxSquare = 0;
	    
	    int i = 0;
	    while(i < n) {
	        if (stack.isEmpty() || a.get(stack.peek()) <= a.get(i)) {
	            stack.push(i ++);
	        } else {           
	            maxSquare = updateMaxSquare(stack, a, maxSquare, i);
	        }
	    }
	    
	    while (!stack.empty()) {
	    	maxSquare = updateMaxSquare(stack, a, maxSquare, i);
	    }
	    
	    return maxSquare;
	}
	
	public int updateMaxSquare(Stack<Integer> stack, ArrayList<Integer> a, int maxSquare, int i) {
		int topIndex = stack.pop();
        
        int barsCount = stack.empty() ? i : (i - stack.peek() - 1);
        int square = a.get(topIndex) * barsCount;
        
        return Math.max(square, maxSquare);
	}
}
