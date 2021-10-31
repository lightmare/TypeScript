//// [assignToEnum.ts]
enum A { foo, bar }
A = undefined;  // invalid LHS
A = A.bar;      // invalid LHS
A.foo = 1;      // invalid LHS
A.foo = A.bar;  // invalid LHS



//// [assignToEnum.js]
var A;
(function (A) {
    A[A[0] = "foo"] = 0;
    A[A[1] = "bar"] = 1;
})(A || (A = {}));
A = undefined; // invalid LHS
A = A.bar; // invalid LHS
A.foo = 1; // invalid LHS
A.foo = A.bar; // invalid LHS
