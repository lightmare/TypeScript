//// [tests/cases/compiler/constEnumPreserveEmitNamedExport2.ts] ////

//// [a.ts]
const enum A {
    Foo
};
export { A };

//// [b.ts]
import { A } from './a';
export { A as B };


//// [a.js]
var A;
(function () {
    this[this[0] = "Foo"] = 0;
}.call(A || (A = {})));
;
export { A };
//// [b.js]
import { A } from './a';
export { A as B };
