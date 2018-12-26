// Stack Data Structure
// Push,Pop,length,peek,isEmpty
function Stack() {
    this.stack = [];
}

Stack.prototype.pop = function () {
    return this.stack.pop();
}

Stack.prototype.push = function (data) {
    return this.stack.push(data);
}

Stack.prototype.length = function () {
    return this.stack.length;
}

Stack.prototype.peek = function () {
    return this.stack[this.stack.length - 1];
}

Stack.prototype.isEmpty = function () {
    return this.stack.length === 0;
}