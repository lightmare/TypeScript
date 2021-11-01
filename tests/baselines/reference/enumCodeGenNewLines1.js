//// [enumCodeGenNewLines1.ts]
enum foo {
  b = 1,
  c = 2,
  d = 3
}


//// [enumCodeGenNewLines1.js]
var foo;
(function () {
    this[this[1] = "b"] = 1;
    this[this[2] = "c"] = 2;
    this[this[3] = "d"] = 3;
}.call(foo || (foo = {})));
