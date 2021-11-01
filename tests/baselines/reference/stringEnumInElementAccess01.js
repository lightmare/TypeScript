//// [stringEnumInElementAccess01.ts]
enum E {
    A = "a",
    B = "b",
    C = "c",
}

interface Item {
    a: string;
    b: number;
    c: boolean;
}

declare const item: Item;
declare const e: E;
const snb: string | number | boolean = item[e];


//// [stringEnumInElementAccess01.js]
var E;
(function () {
    this["A"] = "a";
    this["B"] = "b";
    this["C"] = "c";
}.call(E || (E = {})));
var snb = item[e];
