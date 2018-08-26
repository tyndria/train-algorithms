package algorithms.array;

import java.util.ArrayList;
import java.util.Collections;

/* Given a collection of intervals, merge all overlapping intervals. */

public class MergeOverlappingIntervals {

	public ArrayList<Interval> merge(ArrayList<Interval> intervals) {
		ArrayList<Interval> result = new ArrayList<Interval>();

		if (intervals.isEmpty()) {
			return result;
		}

		Collections.sort(intervals);

		Interval current = intervals.get(0);
		Interval overlapping = current;

		for (int i = 1; i < intervals.size(); i++) {
			current = intervals.get(i);

			if (current.start <= overlapping.end) {
				overlapping = new Interval(Math.min(overlapping.start, current.start),
						Math.max(overlapping.end, current.end));
			} else {
				result.add(overlapping);
				overlapping = current;
			}
		}

		if (result.isEmpty() || !overlapping.equals(result.get(result.size() - 1))) {
			result.add(overlapping);
		}

		return result;
	}

	class Interval implements Comparable<Interval> {
		int start;
		int end;

		Interval() {
			start = 0;
			end = 0;
		}

		Interval(int s, int e) {
			start = s;
			end = e;
		}

		public int compareTo(Interval interval) {
			return this.start - interval.start;
		}

		public boolean equals(Interval interval) {
			return interval.start == this.start && interval.end == this.end;
		}

		public String toString() {
			return "(" + start + "," + end + ")";
		}
	}
}
