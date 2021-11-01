//// [unionOfEnumInference.ts]
// Repro from #42932

enum Enum { A, B, C }

interface Interface<T extends Enum> {
	type: T;
}

function foo<T extends Enum>(x: Interface<T>) { }

function bar(x: Interface<Enum.A | Enum.B> | Interface<Enum.C>) {
	foo(x);
}


//// [unionOfEnumInference.js]
"use strict";
// Repro from #42932
var Enum;
(function () {
    this[this[0] = "A"] = 0;
    this[this[1] = "B"] = 1;
    this[this[2] = "C"] = 2;
}.call(Enum || (Enum = {})));
function foo(x) { }
function bar(x) {
    foo(x);
}
