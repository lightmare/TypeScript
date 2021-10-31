//// [tests/cases/conformance/expressions/typeAssertions/constAssertionOnEnum.ts] ////

//// [enum.ts]
export enum Foo {
    A,
    B,
}

//// [test.ts]
import {Foo} from './enum';

enum Bar {
    A,
    B,
}
let foo = Foo.A as const;
let bar = Bar.A as const;

//// [ns.ts]
namespace ns {
    export enum Foo { X }
    ns.Foo.X as const;
}

//// [more.ts]
export enum Foo { X }
(Foo).X as const;


//// [enum.js]
export var Foo;
(function (Foo) {
    Foo[Foo[0] = "A"] = 0;
    Foo[Foo[1] = "B"] = 1;
})(Foo || (Foo = {}));
//// [test.js]
import { Foo } from './enum';
var Bar;
(function (Bar) {
    Bar[Bar[0] = "A"] = 0;
    Bar[Bar[1] = "B"] = 1;
})(Bar || (Bar = {}));
let foo = Foo.A;
let bar = Bar.A;
//// [ns.js]
"use strict";
var ns;
(function (ns) {
    let Foo;
    (function (Foo) {
        Foo[Foo[0] = "X"] = 0;
    })(Foo = ns.Foo || (ns.Foo = {}));
    ns.Foo.X;
})(ns || (ns = {}));
//// [more.js]
export var Foo;
(function (Foo) {
    Foo[Foo[0] = "X"] = 0;
})(Foo || (Foo = {}));
(Foo).X;
