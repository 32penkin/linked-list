## Linked list task
 ###  Linked list
 is a linear collection of data elements, called nodes, each pointing to the next node by means of a pointer.
 It is a data structure consisting of a group of nodes which together represent a sequence.

 ###  Example:
 To create a new List:
 ```sh
  const LinkedList = new LinkedList();
  //create nodes for inserting:
  const node1 = new Node('node 1');
  const node2 = new Node('node 2');
  const node3 = new Node('node 3', node1);
 ```
 You can use methods of LinkedList such as:
 * get(position) - for getting a node from position
 * push(node) - for adding new node to your List (to the its end)
 * add(node, position) - to add a node to a specific position
 * remove(position) - to remove node from specific position
 Also u can use next methods: getHead(), isEmpty(), clear(), size().

 ```sh
  LinkedList.push(node1);
  LinkedList.push(node3);
  LinkedList.add(node2, 1);
  LinkedList.remove(1);
 ```


### Run tests
```sh
npm test
```

### Run in node.js
```sh
node index.js
```

---
