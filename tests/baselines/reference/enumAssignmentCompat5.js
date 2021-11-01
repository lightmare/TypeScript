//// [enumAssignmentCompat5.ts]
enum E {
    A, B, C
}
enum Computed {
    A = 1 << 1,
    B = 1 << 2,
    C = 1 << 3,
}
let n: number;
let e: E = n; // ok because it's too inconvenient otherwise
e = 0; // ok, in range
e = 4; // ok, out of range, but allowed computed enums don't have all members
let a: E.A = 0; // ok, A === 0
a = 2; // error, 2 !== 0
a = n; // ok

let c: Computed = n; // ok
c = n; // ok
c = 4; // ok
let ca: Computed.A = 1; // error, Computed.A isn't a literal type because Computed has no enum literals





//// [enumAssignmentCompat5.js]
var E;
(function () {
    this[this[0] = "A"] = 0;
    this[this[1] = "B"] = 1;
    this[this[2] = "C"] = 2;
}.call(E || (E = {})));
var Computed;
(function () {
    this[this[2] = "A"] = 2;
    this[this[4] = "B"] = 4;
    this[this[8] = "C"] = 8;
}.call(Computed || (Computed = {})));
var n;
var e = n; // ok because it's too inconvenient otherwise
e = 0; // ok, in range
e = 4; // ok, out of range, but allowed computed enums don't have all members
var a = 0; // ok, A === 0
a = 2; // error, 2 !== 0
a = n; // ok
var c = n; // ok
c = n; // ok
c = 4; // ok
var ca = 1; // error, Computed.A isn't a literal type because Computed has no enum literals
