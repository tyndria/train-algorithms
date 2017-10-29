// Given an array of size n, find the majority element. The majority element is the element that appears more than floor(n/2) times.
// You may assume that the array is non-empty and the majority element always exist in the array.


import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;

public class MajorityElement {
	public int getMajorityElement(List<Integer> a) {
		if (a.size() == 1) {
			return a.get(0);
		}
		HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

		for (int i = 0; i < a.size(); i++) {
			int c = a.get(i);
			if (map.containsKey(c)) {
				int freq = map.get(c);
				if (freq >= Math.floor(a.size() / 2)) {
					return c;
				}
				map.put(c, ++freq);
			} else {
				map.put(c, 1);
			}
		}
		return -1;
	}
}
