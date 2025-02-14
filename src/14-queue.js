const ListNode = require('../extensions/list-node');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.sizeNode = 0;
  }

  get size() {
    return this.sizeNode;
  }

  enqueue(element) {
    const newNode = new ListNode();
    newNode.value = element;
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.sizeNode += 1;
  }

  dequeue() {
    const temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.sizeNode -= 1;
    return temp.value;
  }
}

module.exports = Queue;
