const LinkedList = require('./src/linked-list');
const Node = require('./src/node');

let ll = new LinkedList();

let node1 = new Node('node1');
let node2 = new Node('node2');
let node3 = new Node('node3');


ll.push(node1);
ll.push(node2);
ll.push(node3);


console.log(node3);


