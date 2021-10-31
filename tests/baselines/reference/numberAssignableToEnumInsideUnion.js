//// [numberAssignableToEnumInsideUnion.ts]
enum E { A, B }
let n: number;
let z: E | boolean = n;


//// [numberAssignableToEnumInsideUnion.js]
var E;
(function (E) {
    E[E[0] = "A"] = 0;
    E[E[1] = "B"] = 1;
})(E || (E = {}));
var n;
var z = n;
