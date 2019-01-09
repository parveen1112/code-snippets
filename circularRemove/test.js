const circularRemove = require('./index');
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

test('circularRemove', () => {
  expect(typeof circularRemove).toEqual('function');
});

test('circular detects circular linked lists', () => {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;

  expect(circularRemove(l)).toEqual(true);
  expect(c.next).toEqual(null);
});

test('circular detects non-circular linked lists', () => {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = null;

  expect(circularRemove(l)).toEqual(false);
});
