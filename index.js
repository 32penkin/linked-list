const LinkedList = require('./src/linked-list');
const Node = require('./src/node');

const ll = new LinkedList();
// let ll2 = new LinkedList();
//
// let node1 = new Node('node1');
// let node2 = new Node('node2');
// let node3 = new Node('node3', node1);
// let node4 = new Node('node4');
// let node5 = new Node('node5');
//
// ll.pushNode(node1);
// ll.pushNode(node2);
// ll.pushNode(node3);
//
// ll2.pushNode(node4);
// ll2.pushNode(node5);
//
//
//
// console.log(ll.isRound());
// console.log('-------------------------------------');
// console.log(ll2.isRound());

ll.push('node1');
ll.push('node3');


console.log(ll.get(1));



