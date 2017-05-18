const LinkedList = require('./src/linked-list');
const Node = require('./src/node');

let ll = new LinkedList();
// let ll2 = new LinkedList();

let node1 = new Node('node1');
let node2 = new Node('node2');
let node3 = new Node('node3');
let circularNode = new Node('circularNode', node2);

ll.push(node1);
ll.push(node2);
ll.push(node3);
ll.push(circularNode);

// ll2.push(node1);
// ll2.push(node2);
// ll2.push(node3);

console.log(ll.isRound(ll.getHead()));





