//// [for-of47.ts]
var x: string, y: number;
var array = [{ x: "", y: true }]
enum E { x }
for ({x, y: y = E.x} of array) {
    x;
    y;
}

//// [for-of47.js]
var x, y;
var array = [{ x: "", y: true }];
var E;
(function () {
    this[this[0] = "x"] = 0;
}.call(E || (E = {})));
for ({ x, y: y = E.x } of array) {
    x;
    y;
}
