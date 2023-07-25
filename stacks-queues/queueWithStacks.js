/*
  Implement Queue using Stacks

  Implement the following operations of a queue using stacks.

  push(x) -- Push element x to the back of queue.
  pop() -- Removes the element from in front of queue.
  peek() -- Get the front element.
  empty() -- Return whether the queue is empty.
*/

class Queue {
  constructor() {
    this.stackToPush = [];
    this.stackToPop = [];
  }

  /**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stackToPush.push(x);
  }

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
    if (!this.stackToPop.length) {
      while (this.stackToPush.length !== 0) {
        this.stackToPop.push(this.stackToPush.pop());
      }
    }

    return this.stackToPop.pop();
  }

  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    if (!this.stackToPop.length) {
      while (this.stackToPush.length !== 0) {
        this.stackToPop.push(this.stackToPush.pop());
      }
    }

    return this.stackToPop[this.stackToPop.length - 1];
  }

  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    return this.stackToPop.length === 0 && this.stackToPush.length === 0;
  }
}


// Second implementation with 0(n) push

var MyQueue = function() {
  this.stack = [];
  this.additionalStack = [];
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  while (this.stack.length > 0) {
      this.additionalStack.push(this.stack.pop());
  }

  this.stack.push(x);

  while (this.additionalStack.length > 0) {
      this.stack.push(this.additionalStack.pop());
  }
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  return this.stack.pop();
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  console.log(this);
  return this.stack[this.stack.length - 1];
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.stack.length === 0;
};
