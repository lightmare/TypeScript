//// [enumWithComputedMember.ts]
enum A { 
    X = "".length, 
    Y = X,
    Z
}


//// [enumWithComputedMember.js]
var A;
(function () {
    this[this["X"] = "".length] = "X";
    this[this["Y"] = this.X] = "Y";
    this[this["Z"] = void 0] = "Z";
}.call(A || (A = {})));
