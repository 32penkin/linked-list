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

    ll.push('node1');
    ll.push('node2');
    ll.push('node3');

    it('check the lenght of the list', () => {
      expect(ll.length).to.equal(3);
    });

    it('check the head of the list', () => {
      expect(ll.head.data).to.equal('node1');
    });

    it('assigns node1.next to node2', () => {
      expect(ll.getHead().next.data).to.equal('node2');
    });

    it('assigns node3.next to undefined', () => {
      expect(ll.get(2).next).to.equal(undefined);
    });
  });

  describe('#get', () => {
    const ll = new LinkedList();

    ll.push('node1');
    ll.push('node2');

    it('verify the correctness of the returned node', () => {
      expect(ll.get(0).data).to.equal('node1');
      expect(ll.get(1).data).to.equal('node2');
      expect(ll.get(-2).data).to.throw();
      expect(ll.get('position').data).to.throw();
    });
  });

  describe('#add', () => {
    const ll = new LinkedList();

    ll.push('node1');
    ll.push('node2');
    ll.push('node4');
    ll.push('node5');
    ll.add('node3', 2);

    it('verify the correctness of inserted node position', () => {
      expect(ll.get(2).data).to.equal('node3');
    });

    it('verify the correctness of other nodes position', () => {
      expect(ll.get(0).data).to.equal('node1');
      expect(ll.get(1).data).to.equal('node2');
      expect(ll.get(3).data).to.equal('node4');
      expect(ll.get(-2).data).to.throw();
      expect(ll.get('position').data).to.throw();
    });

    it('check the lenght of the list', () => {
      expect(ll.length).to.equal(5);
    });
  });

  describe('#remove', () => {
    const ll = new LinkedList();

    ll.push('node1');
    ll.push('node2');
    ll.push('node3');
    ll.remove(1);

    it('check the lenght of the list', () => {
      expect(ll.length).to.equal(2);
    });

    it('verify the correctness of other nodes position', () => {
      expect(ll.get(0).data).to.equal('node1');
      expect(ll.get(1).data).to.equal('node3');
    });

    it('verify the correctness of inserted position', () => {
      expect(ll.remove(-1)).to.throw();
      expect(ll.remove('position')).to.throw();
    });
  });

  describe('#getHead', () => {
    const ll = new LinkedList();

    ll.push('node1');
    ll.push('node2');

    it('check the head of the list', () => {
      expect(ll.getHead().data).to.equal('node1');
    });

    it('check the head of the list is null if list become empty', () => {
      ll.remove(1);
      ll.remove(0);
      expect(ll.getHead()).to.equal(null);
    });

    it('check the head of the list is null if list become empty', () => {
      ll.clear();
      expect(ll.getHead()).to.equal(null);
    });
  });

  describe('#isEmpty', () => {
    const ll = new LinkedList();
    const ll2 = new LinkedList();

    ll.push('node1');
    ll.push('node2');

    it('check is empty the list', () => {
      expect(ll.isEmpty()).to.equal(false);
    });

    it('check is empty the list', () => {
      expect(ll2.isEmpty()).to.equal(true);
    });

    it('check is empty the list', () => {
      ll.clear();
      expect(ll.isEmpty()).to.equal(true);
    });

    it('check is empty the list', () => {
      ll.remove(0);
      ll.remove(0);
      expect(ll.isEmpty()).to.equal(true);
    });
  });

  describe('#clear', () => {
    const ll = new LinkedList();
    const ll2 = new LinkedList();

    ll.push('node1');
    ll.clear();

    it('check list after clearing', () => {
      expect(ll.getHead()).to.equal(null);
    });

    it('check list after clearing', () => {
      expect(ll.length).to.equal(0);
    });

    it('check list after clearing', () => {
      ll2.clear();
      expect(ll.length).to.equal(0);
    });

    it('check list after clearing', () => {
      ll2.push('some data');
      ll2.remove(0);
      expect(ll2.length).to.equal(0);
    });
  });

  describe('#size', () => {
    const ll = new LinkedList();
    const ll2 = new LinkedList();
    const ll3 = new LinkedList();

    ll.push('node1');
    ll.push('node2');
    ll.push('node3');
    ll2.push('node4');
    ll2.push('node5');

    it('check size of list', () => {
      expect(ll.size()).to.equal(3);
    });

    it('another check size of list', () => {
      expect(ll2.size()).to.equal(2);
    });

    it('another check size of list', () => {
      expect(ll3.size()).to.equal(0);
    });

    it('another check size of list', () => {
      ll2.clear();
      expect(ll2.size()).to.equal(0);
    });

    it('another check size of list', () => {
      ll2.remove(1);
      expect(ll2.size()).to.equal(1);
    });
  });

  describe('#isRound', () => {
    const ll = new LinkedList();
    const ll2 = new LinkedList();

    let node1 = new Node('node1');
    let node2 = new Node('node2');
    let node3 = new Node('node3', node1);
    let node4 = new Node('node4');
    let node5 = new Node('node5');



    it('check if the list is circular', () => {
      ll.pushNode(node1);
      ll.pushNode(node2);
      ll.pushNode(node3);
      expect(ll.isRound()).to.equal(true);
    });

    it('check if the list is circular', () => {
      ll2.pushNode(node4);
      ll2.pushNode(node5);
      expect(ll2.isRound()).to.equal(false);
    });
  });

});

