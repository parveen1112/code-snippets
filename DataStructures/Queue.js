// Queue
// FIFO
// enqueue, dequeue, peek, isEmpty, length
function Queue() {
    this.queue = [];
}

Queue.prototype.enqueue = function (data) {
    this.queue.push(data);
}

Queue.prototype.dequeue = function () {
    return this.queue.shift();
}

Queue.prototype.peek = function () {
    return this.queue[0];
}

Queue.prototype.isEmpty = function () {
    return this.queue.length === 0;
}

Queue.prototype.length = function () {
    return this.queue.length;
}