// Currying Implementation

function curry(fn) {
    var fnLength = fn.length,
        args = [];
    if (fnLength === 0) return fn;
    return next(args, fnLength, fn);
}

function next(args, total, fn) {
    return function (x) {
        args.push(x);
        if (args.length === total) {
            return fn.apply(this, args);
        }
        return next(args, total, fn);
    }
}

x = curry(function add(a, b, c) {
    return a + b + c;
})

console.log(x(1)(2)(3));