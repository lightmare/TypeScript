//// [strictModeReservedWord2.ts]
"use strict"
interface public { }
interface implements {
    foo(package, protected);
}
enum package { }
enum foo {
    public,
    private,
    pacakge
}

const enum private {
    public,
    private,
    pacakge
}

const enum bar {
    public,
    private,
    pacakge
}


//// [strictModeReservedWord2.js]
"use strict";
var package;
package || (package = {});
var foo;
(function () {
    this[this[0] = "public"] = 0;
    this[this[1] = "private"] = 1;
    this[this[2] = "pacakge"] = 2;
}.call(foo || (foo = {})));
