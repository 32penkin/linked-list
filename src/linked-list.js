const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get(position) {
    let current = this.head;

    if (position >= this.length) {
      throw 'The position is outside the list!'
    }
    current = this.plunk(current, position);
    return current;
  }

  add(node, position) {
    let prev = this.get(position - 1);
    let curr = prev.next;

    if (position == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      node.next = curr;
      prev.next = node;
    }
    this.length++;
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
    let prev = this.get(position - 1);

    if (position == 0) {
      this.head = this.head.next;
    } else {
      prev.next = prev.next.next;
    }
    this.length--;
  }

  getHead() {
    return this.head;
  }

  isEmpty() {
    return this.length == 0;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  isRound(head) {

  }

  plunk(node, position) { // static ?
    let i = 0;

    while (i < position) {
      node = node.next;
      i++;
    }
    return node;
  }

}

module.exports = LinkedList;