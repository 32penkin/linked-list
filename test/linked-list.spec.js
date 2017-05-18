const LinkedList = require('../src/linked-list');

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



});

