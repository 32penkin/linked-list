const LinkedList = require('./src/linked-list');
const Node = require('./src/node');

const ll = new LinkedList();
const ll2 = new LinkedList();


ll.push('node1');
ll.push('node2');
ll.push('node3');

ll2.push('node3');
ll2.push('node4');


ll.remove(0);
ll.remove(0);
ll.remove(0);

ll2.clear();

console.log(ll.isEmpty());

console.log(ll2.isEmpty());




