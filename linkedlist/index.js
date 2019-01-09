// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.length += 1;
        if (this.tail === null) {
            this.tail = this.head;
        }
    }
    size() {
        return this.length;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        return this.tail;
    }
    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    removeFirst() {
        if (!this.head) return;
        if (this.head === this.tail) {
            return this.clear();
        }
        this.head = this.head.next;
        this.length -= 1;
    }
    removeLast() {
        if (!this.tail) return;
        let node = this.head;
        if (node === this.tail) {
            this.clear();
            return;
        }
        while(node) {
            if (node.next === this.tail) {
                break;
            }
            node = node.next;
        }
        node.next = null;
        this.tail = node;
        this.length -= 1;
    }
    insertLast(data) {
        const newNode = new Node(data, null);
        this.length += 1;
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    getAt(index) {
        let node = this.head;
        for (let i=0; (i<index && node); i++) {
            node = node.next;
        }
        return node;
    }
    removeAt(index) {
        const size = this.size();
        if (index < 0 || index >= size) {
            return;
        }
        if (index === 0) {
            return this.removeFirst();
        }
        let node = this.getAt(index - 1);
        if (node.next === this.tail) {
            return this.removeLast();
        }
        this.length -= 1;
        node.next = node.next.next;
    }
    forEach(fn) {
        let node = this.head;
        while(node) {
            fn(node);
            node = node.next;
        }
    }
    insertAt(data, index) {
        const size = this.size();
        if (index < 0) {
            return;
        }
        if (index === 0) {
            return this.insertFirst(data);
        }
        let node = this.getAt(index - 1) || this.getLast();
        this.length += 1;
        node.next = new Node(data, node.next);
    }
    * [Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
