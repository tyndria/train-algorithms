/* Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression. */

public class ReversePolishNotation {
	public int evalRPN(ArrayList<String> a) {
		Stack<String> stack = new Stack();
		for (int i = 0; i < a.size(); i++) {
			if (isOperator(a.get(i))) {
				String v2 = stack.pop();
				String v1 = stack.pop();
				String result = evaluateExpression(v1, v2, a.get(i)) + "";
				stack.push(result);
			} else {
				stack.push(a.get(i));
			}
		}
		if (stack.size() > 0) {
			return (int) Math.round(Double.parseDouble(stack.pop()));
		} else {
			return 0;
		}
	}
	
	public boolean isOperator(String s) {
	   return (s.equals("+") || s.equals("-") || s.equals("/") || s.equals("*"));
	}
	
	public int evaluateExpression(String operand1, String operand2, String operator) {
		int o1 = Integer.parseInt(operand1);
		int o2 = Integer.parseInt(operand2);
		switch(operator) {
		case "+":
			return o1 + o2;
		case "-":
			return o1 - o2;
		case "*":
			return o1 * o2;
		case "/":
			if (o2 != 0) {
				return o1 / o2;
			} else {
				return 0;
			}
		}
		return 0;
	}
}
