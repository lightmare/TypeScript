//// [enumCodeGenNewLines1.ts]
enum foo {
  b = 1,
  c = 2,
  d = 3
}


//// [enumCodeGenNewLines1.js]
var foo;
(function (foo) {
    foo[foo[1] = "b"] = 1;
    foo[foo[2] = "c"] = 2;
    foo[foo[3] = "d"] = 3;
})(foo || (foo = {}));
