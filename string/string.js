function sum(a,b) {
    return a +b;
}
function difference(a,b) {
    return a -b;
}
function product(a,b) {
    return a *b;
}
function quotient(a,b) {
    return a /b;
}
function squareRoot(a) {
    return Math.sqrt(a);
}
function max(a,b) {
    return Math.max(a,b);
}


module.exports = {
    sum,
    difference,
    product,
    quotient,
    squareRoot,
    max
}