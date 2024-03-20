/**
 * Stack data structure
 * This class encapsulates a stack data structure
 * Stack is a LIFO data structure
 * It provides two important methods, push and pop to insert and remove items
 * from it. Another method called peek might be used to return the item at the
 * top of the stack. We should also be able to figure out if a stack is empty. isEmpty method can be used for this purpose. peek method will allow you to
 * get the element at the top without removing it.
 */
class Stack {
  constructor() {
    this.elements = [];
  }
  /**
   * push the item to the top of the stack
   * @param {any} element
   */
  push(element) {
    this.elements.push(element);
  }

  /**
   * Returns the item at the top of the stack
   *
   */
  pop() {
    const popped = this.elements.pop();
    return popped;
  }

  /**
   * Checks if the stack is empty
   * @returns {boolean} true if the stack is empty, otherwise false.
   */
  isEmpty() {
    return this.elements.length === 0;
  }

  /**
   * Returns the item at the top, but does not shrink the stack.
   * @returns item at the top
   */
  peek() {
    return this.elements[this.elements.length - 1];
  }

  /**
   * prints the stack
   */
  print() {
    console.log('Stack contents:', this.elements);
  }
}
