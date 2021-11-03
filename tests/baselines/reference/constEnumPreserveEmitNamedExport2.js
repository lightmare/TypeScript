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
(function (A) {
    A[A[0] = "Foo"] = 0;
})(A || (A = {}));
;
export { A };
//// [b.js]
import { A } from './a';
export { A as B };
