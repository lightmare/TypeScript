//// [enumPropertyAccessBeforeInitalisation.ts]
enum E {
    A = A,
    B = E.B,
    C = E["C"],
    D = 1 + D
}


//// [enumPropertyAccessBeforeInitalisation.js]
var E;
(function () {
    this[this["A"] = this.A] = "A";
    this[this["B"] = E.B] = "B";
    this[this["C"] = E["C"]] = "C";
    this[this["D"] = 1 + this.D] = "D";
}.call(E || (E = {})));
