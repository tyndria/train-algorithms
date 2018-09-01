/*
 Maximize Distance to Closest Person

 In a row of seats, 1 represents a person sitting in that seat, and 0 represents that the seat is empty.
 There is at least one empty seat, and at least one person sitting.
 Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.
 Return that maximum distance to closest person.
* */

const isClear = (seatsInfo) => seatsInfo.start === -1 && seatsInfo.end === -1;

const countDistanceToClosest = (length, {start, end}) => {
  if (start === 0) {
    return end;
  } else if (end === length) {
    return length - start;
  } else {
    return Math.round((end  - start) / 2);
  }
}

const getMaxEmptySeatsRow = (length, first, second) => {
  const firstDistance = countDistanceToClosest(length, first);
  const secondDistance = countDistanceToClosest(length, second);
  return firstDistance > secondDistance ? first : second;
}

/**
 * @param {number[]} seats
 * @return {number}
 */
const maxDistToClosest = (seats) => {
  const DEFAULT_EMPTY_SEATS = {start: -1, end: -1};
  const length = seats.length;

  let currentEmptySeats = DEFAULT_EMPTY_SEATS;
  let maxEmptySeats = DEFAULT_EMPTY_SEATS;

  for(let i = 0; i < length; i ++) {
    if (seats[i] && !isClear(currentEmptySeats)) { // row of empty seats ended
      maxEmptySeats = getMaxEmptySeatsRow(length, maxEmptySeats, currentEmptySeats);
      currentEmptySeats = DEFAULT_EMPTY_SEATS;
    } else if (!seats[i] && isClear(currentEmptySeats)) { // new row of empty seats begins
      currentEmptySeats = {start: i, end: i + 1};
    } else if (!seats[i]) {
      currentEmptySeats = {...currentEmptySeats, end: i + 1};
    }
  }

  maxEmptySeats = getMaxEmptySeatsRow(length, maxEmptySeats, currentEmptySeats);

  return countDistanceToClosest(length, maxEmptySeats);
};
