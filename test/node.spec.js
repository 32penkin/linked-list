const Node = require('../src/node');

describe('Node', () => {
  describe('#constructor', () => {
    const node1 = new Node();
    const node3 = new Node();
    const node2 = new Node('node2', node3);

    it('assigns undefined to this.data', () => {
      expect(node1.data).to.equal(undefined);
    });

    it('assigns undefined to this.next', () => {
      expect(node1.next).to.equal(undefined);
    });

    it('check if node has data and fnd they correspond to the created', () => {
      expect(node2.data).to.equal('node2');
    });

    it('assigns if node has next node', () => {
      expect(node2.next).to.equal(node3);
    });
  });



});