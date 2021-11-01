//// [blockScopedEnumVariablesUseBeforeDef_preserve.ts]
function foo1() {
    return E.A
    enum E { A }
}

function foo2() {
    return E.A
    const enum E { A }
}

//// [blockScopedEnumVariablesUseBeforeDef_preserve.js]
function foo1() {
    return E.A;
    var E;
    (function () {
        this[this[0] = "A"] = 0;
    }.call(E || (E = {})));
}
function foo2() {
    return 0 /* A */;
    var E;
    (function () {
        this[this[0] = "A"] = 0;
    }.call(E || (E = {})));
}
