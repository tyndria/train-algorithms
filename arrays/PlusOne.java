import java.util.ArrayList;

/*
Given a non-negative number represented as an array of digits,
add 1 to the number ( increment the number represented by the digits ).
The digits are stored such that the most significant digit is at the head of the list.
*/

public class PlusOne {

	public ArrayList<Integer> plusOne(ArrayList<Integer> A) {
        int size = A.size();
        int lastDigit = A.get(size - 1);
        int remain = 0;
        ArrayList<Integer> result = new ArrayList();
        
        if (lastDigit < 9) {
            A.set(size - 1, lastDigit + 1);
        } else {
            remain = 1;
            for (int i = size - 1; i >= 0; i --) {
                if (A.get(i) == 9 && remain == 1) {
                    A.set(i, 0);
                    remain = 1;
                } else if (remain == 1) {
                    A.set(i, A.get(i) + 1);
                    remain = 0;
                }
            }
        }
        
        if (remain == 1) {
            result.add(1);
            result.addAll(A);
        } else if (A.get(0) == 0) {
        	int zeroesIndex = 0;
        	while (A.get(zeroesIndex) == 0) {
        		zeroesIndex ++;
        	}
            result = new ArrayList(A.subList(zeroesIndex, size));
        } else {
        	result = A;
        }
       
        return result;
    }
}
