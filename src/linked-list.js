const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get(position) {
    let current = this.head;

    if (position >= this.length || position < 0 || typeof position !== 'number') {
      throw 'The position is outside the list!'
    }
    current = this.plunk(current, position);
    return current;
  }

  add(data, position) {
    if (position >= this.length || position < 0 || typeof position !== 'number') {
      throw 'The position is outside the list!'
    }

    const node = new Node(data);
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

  push(data) {
    let node = new Node(data);
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
    let currentNode = this.head;
    let prev = null;
    let i = 0;

    if (position >= this.length || position < 0 || typeof position !== 'number') {
      throw 'The position is outside the list!'
    }

    if (position === 0) {
      this.head = currentNode.next;
      this.length--;
    } else {

      while (i < position) {
        prev = currentNode;
        currentNode = currentNode.next;
        i++;
      }

      prev.next = currentNode.next;
      this.length--;
    }
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

  isRound() {
    let slower = this.head;
    let faster = this.head.next;

    while (true) {
      if (!faster || !faster.next) return false;
      else if (faster == slower || faster.next == slower) return true;
      else {
        slower = slower.next;
        faster = faster.next.next;
      }
    }
  }

  pushNode(node) { // for deb
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

}

module.exports = LinkedList;