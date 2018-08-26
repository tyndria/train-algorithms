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
