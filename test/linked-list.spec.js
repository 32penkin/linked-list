const LinkedList = require('../src/linked-list');
const Node = require('../src/node');

describe('LinkedList', () => {
  describe('#constructor', () => {
    const ll = new LinkedList();

    it('assigns null to this.head', () => {
      expect(ll.head).to.equal(null);
    });

    it('assigns 0 to this.length', () => {
      expect(ll.length).to.equal(0);
    });
  });

  describe('#push', () => {
    const ll = new LinkedList();
    let node1 = new Node('node1');
    let node2 = new Node('node2');
    let node3 = new Node('node3');

    ll.push(node1);
    ll.push(node2);
    ll.push(node3);

    it('check the lenght of the list', () => {
      expect(ll.length).to.equal(3);
    });

    it('check the head of the list', () => {
      expect(ll.head).to.equal(node1);
    });

    it('assigns node1.next to node2', () => {
      expect(node1.next).to.equal(node2);
    });

    it('assigns node3.next to undefined', () => {
      expect(node3.next).to.equal(undefined);
    });
  });

  describe('#get', () => {
    const ll = new LinkedList();
    let node1 = new Node('node1');
    let node2 = new Node('node2');
    ll.push(node1);
    ll.push(node2);

    it('verify the correctness of the returned node', () => {
      expect(ll.get(0)).to.equal(node1);
      expect(ll.get(1)).to.equal(node2);
    });
  });

  describe('#add', () => {
    const ll = new LinkedList();
    let node1 = new Node('node1');
    let node2 = new Node('node2');
    let node3 = new Node('node3');

    ll.push(node1);
    ll.push(node2);
    ll.add(node3, 1);

    it('verify the correctness of inserted node position', () => {
      expect(ll.get(1)).to.equal(node3);
    });

    it('check the lenght of the list', () => {
      expect(ll.length).to.equal(3);
    });
  });

  describe('#remove', () => {
    const ll = new LinkedList();
    const ll2 = new LinkedList();
    let node1 = new Node('node1');
    let node2 = new Node('node2');
    let node3 = new Node('node3');

    ll.push(node1);
    ll.push(node2);
    ll.push(node3);
    ll.remove(1);
    ll2.push(node1);
    ll2.push(node3);

    it('check the lenght of the list', () => {
      expect(ll.length).to.equal(2);
    });
  });

  describe('#getHead', () => {
    const ll = new LinkedList();
    let node1 = new Node('node1');
    let node2 = new Node('node2');

    ll.push(node1);
    ll.push(node2);

    it('check the head of the list', () => {
      expect(ll.getHead()).to.equal(node1);
    });
  });

  describe('#isEmpty', () => {
    const ll = new LinkedList();
    const ll2 = new LinkedList();
    let node1 = new Node('node1');

    ll.push(node1);

    it('check is empty the list', () => {
      expect(ll.isEmpty()).to.equal(false);
    });

    it('check is empty the list', () => {
      expect(ll2.isEmpty()).to.equal(true);
    });
  });

  describe('#clear', () => {
    const ll = new LinkedList();
    let node1 = new Node('node1');
    ll.push(node1);
    ll.clear();

    it('check list after clearing', () => {
      expect(ll.getHead()).to.equal(null);
    });

    it('check list after clearing', () => {
      expect(ll.length).to.equal(0);
    });
  });

  describe('#size', () => {
    const ll = new LinkedList();
    const ll2 = new LinkedList();
    const ll3 = new LinkedList();
    const node1 = new Node('node1');
    let node2 = new Node('node2');
    let node3 = new Node('node3');

    ll.push(node1);
    ll.push(node2);
    ll.push(node3);
    ll2.push(node1);
    ll2.push(node3);

    it('check size of list', () => {
      expect(ll.size()).to.equal(3);
    });

    it('another check size of list', () => {
      expect(ll2.size()).to.equal(2);
    });

    it('another check size of list', () => {
      expect(ll3.size()).to.equal(0);
    });
  });

  describe('#isRound', () => {
    const ll = new LinkedList();
    const ll2 = new LinkedList();
    let node1 = new Node('node1');
    let node2 = new Node('node2');
    let node3 = new Node('node3', node1);

    ll.push(node1);
    ll.push(node2);
    ll.push(node3);
    ll2.push(node1);
    ll2.push(node2);

    it('check if the list is circular', () => {
      expect(ll.isRound(ll.head)).to.equal(true);
    });

    it('check if the list is circular', () => {
      expect(ll2.isRound(ll2.head)).to.equal(false);
    });
  });

});

