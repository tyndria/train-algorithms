// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.


var MinStack = function() {
  this.stack = [];
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  const topValueMin = this.stack[this.stack.length - 1]?.min ?? Number.MAX_SAFE_INTEGER;
  
  this.stack.push({ value: val, min: Math.min(topValueMin, val) })
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1].value;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 1].min;
};
