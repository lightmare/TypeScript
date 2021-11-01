//// [awaitAndYield.ts]
async function* test(x: Promise<number>) {
    enum E {
        foo = await x,
        baz = yield 1,
    }
}

//// [awaitAndYield.js]
async function* test(x) {
    let E;
    (function () {
        this[this["foo"] = await x] = "foo";
        this[this["baz"] = yield 1] = "baz";
    }.call(E || (E = {})));
}
