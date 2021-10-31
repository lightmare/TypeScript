//// [duplicateLocalVariable4.ts]
enum E{
a
}
 
var x = E;
var x = E.a;

//// [duplicateLocalVariable4.js]
var E;
(function (E) {
    E[E[0] = "a"] = 0;
})(E || (E = {}));
var x = E;
var x = E.a;
