//// [assignToEnum.ts]
enum A { foo, bar }
A = undefined;  // invalid LHS
A = A.bar;      // invalid LHS
A.foo = 1;      // invalid LHS
A.foo = A.bar;  // invalid LHS



//// [assignToEnum.js]
var A;
(function () {
    this[this[0] = "foo"] = 0;
    this[this[1] = "bar"] = 1;
}.call(A || (A = {})));
A = undefined; // invalid LHS
A = A.bar; // invalid LHS
A.foo = 1; // invalid LHS
A.foo = A.bar; // invalid LHS
