const prettyPrint = (A) => {
  const side = A * 2 - 1;
  const array = [];
  
  var prevRow = [];
  for (var i = 0; i < A; i ++) {
      var row = prevRow.slice();
      for (var j = i; j < side - i; j ++) {
          row[j] = A - i;
      }
      array.push(row);
      prevRow = row;
  }
  
  for (var i = A; i < side; i ++) {
      array.push(array[side - i - 1]);
  }
  
  return array;
}