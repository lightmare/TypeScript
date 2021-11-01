//// [duplicateLocalVariable4.ts]
enum E{
a
}
 
var x = E;
var x = E.a;

//// [duplicateLocalVariable4.js]
var E;
(function () {
    this[this[0] = "a"] = 0;
}.call(E || (E = {})));
var x = E;
var x = E.a;
