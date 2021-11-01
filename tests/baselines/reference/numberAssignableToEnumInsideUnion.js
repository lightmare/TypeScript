//// [numberAssignableToEnumInsideUnion.ts]
enum E { A, B }
let n: number;
let z: E | boolean = n;


//// [numberAssignableToEnumInsideUnion.js]
var E;
(function () {
    this[this[0] = "A"] = 0;
    this[this[1] = "B"] = 1;
}.call(E || (E = {})));
var n;
var z = n;
