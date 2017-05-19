## Linked list task
 ###  Linked list
 is a linear collection of data elements, called nodes, each pointing to the next node by means of a pointer.
 It is a data structure consisting of a group of nodes which together represent a sequence.

 You can use methods of LinkedList such as:
 * get(position) - for getting a node from position
 * push(data) - for adding new node to your List (to the its end)
 * add(data, position) - to add a node to a specific position
 * remove(position) - to remove node from specific position
 * also u can use next methods: getHead(), isEmpty(), clear(), size().

 ###  Example:

 To create a new List:
 ```sh
  const linkedList = new LinkedList();
  ```
  Now linked list looks like:
  ```sh
  LinkedList { head: null, length: 0 }
  ```
  To add some data to the end of List:
  ```sh
  linkedList.push('node1');
  linkedList.push('node3');
  ```
  Now linked list looks like:
  ```sh
  LinkedList {
    head: Node { data: 'node1', next: Node { data: 'node3', next: undefined } },
    length: 2 }
  ```
  To push some data to a specific position:
  ``sh
  linkedList.add('node2', 1);
  ``
  Now linked list looks like:  
  ``sh
  LinkedList {
    head: Node { data: 'node1', next: Node { data: 'node2', next: [Object] } },
    length: 3 }
  ``
  To remove the node from specific position:
  ``sh
  linkedList.remove(1);
  ``
  Now linked list looks like:
  ``sh
   LinkedList {
      head: Node { data: 'node1', next: Node { data: 'node3', next: undefined } },
      length: 2 }
  ``
  To get node from position:
  ``sh
  LinkedList.get(1);
  ``
  This method will return the node from spec. position:
  ``sh
  Node { data: 'node3', next: undefined }
  ``
---
