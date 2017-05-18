const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get(position) {
    let current = this.head;
    let i = 0;

    if (position >= this.length) {
      throw 'The position is outside the list!'
    }
    current = this.plunk(current, position);
    return current;
  }

  add(node, position) {

  }

  push(node) {
    let current = this.head;

    if (!this.head) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  remove(position) {

  }

  getHead() {

  }

  isEmpty() {

  }

  clear() {

  }

  size() {

  }

  plunk(node, position) {
    let i = 0;
    while (i < position) {
      node = node.next;
      i++;
    }
    return node;
  }

}


module.exports = LinkedList;