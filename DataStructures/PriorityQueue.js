const Queue = require('./Queue');

// Priority Queue
// FIFO
// enqueue, dequeue, peek, isEmpty, length
function PriorityQueue() {
    this.lowPriorityQueue = new Queue();
    this.highPriorityQueue = new Queue();
}

PriorityQueue.prototype.enqueue = function (data, high) {
    if (high) return this.highPriorityQueue.enqueue(data);
    return this.lowPriorityQueue.enqueue(data);
}

PriorityQueue.prototype.dequeue = function () {
    if (this.highPriorityQueue.length()) {
        return this.highPriorityQueue.dequeue();
    }
    return this.lowPriorityQueue.dequeue();
}

PriorityQueue.prototype.peek = function () {
    if (this.highPriorityQueue.length()) {
        return this.highPriorityQueue.peek();
    }
    return this.lowPriorityQueue.peek();
}

PriorityQueue.prototype.isEmpty = function () {
    return this.highPriorityQueue.isEmpty() && this.lowPriorityQueue.isEmpty();
}

PriorityQueue.prototype.length = function () {
    return this.highPriorityQueue.length() + this.lowPriorityQueue.length();
}