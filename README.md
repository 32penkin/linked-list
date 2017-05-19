## Linked list task
 ###  Linked list
 is a linear collection of data elements, called nodes, each pointing to the next node by means of a pointer.
 It is a data structure consisting of a group of nodes which together represent a sequence.

 ###  Example:
 To create a new List:
 ```sh
  const LinkedList = new LinkedList();
 ```
 You can use methods of LinkedList such as:
 * get(position) - for getting a node from position
 * push(data) - for adding new node to your List (to the its end)
 * add(data, position) - to add a node to a specific position
 * remove(position) - to remove node from specific position
 Also u can use next methods: getHead(), isEmpty(), clear(), size().

 ```sh
  LinkedList.push('node1');
  LinkedList.push('node3');
  LinkedList.add('node2', 1);
  LinkedList.remove(1);
  LinkedList.get(2);
 ```


### Run tests
```sh
npm test
```

### Run in node.js
```sh
npm start
```

---
