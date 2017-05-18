const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getHead() {

  }

  isEmpty() {

  }

  clear() {

  }

  size() {

  }

  get(position) {

  }

  add(data, position) {

  }

  push(node) {
    let current = this.head;
    if(!this.head) {
      this.head = node;
    } else {
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length ++;
  }

  remove(position) {

  }

}


module.exports = LinkedList;