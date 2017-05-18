const LinkedList = require('./src/linked-list');
const Node = require('./src/node');

let ll = new LinkedList();

let node1 = new Node('node1');
let node2 = new Node('node2');
let node3 = new Node('node3');
let node4 = new Node('node4');


ll.push(node1);
ll.push(node2);
ll.push(node3);
ll.add(node4, 1);


console.log(ll);
// console.log(ll.get(0));
// console.log('----------------------------');
// console.log(ll.get(1));
// console.log('----------------------------');
// console.log(ll.get(2));


