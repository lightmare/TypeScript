//// [TypeGuardWithEnumUnion.ts]
enum Color { R, G, B }

function f1(x: Color | string) {
    if (typeof x === "number") {
        var y = x;
        var y: Color;
    }
    else {
        var z = x;
        var z: string;
    }
}

function f2(x: Color | string | string[]) {
    if (typeof x === "object") {
        var y = x;
        var y: string[];
    }
    if (typeof x === "number") {
        var z = x;
        var z: Color;
    }
    else {
        var w = x;
        var w: string | string[];
    }
    if (typeof x === "string") {
        var a = x;
        var a: string;
    }
    else {
        var b = x;
        var b: Color | string[];
    }
}


//// [TypeGuardWithEnumUnion.js]
var Color;
(function (Color) {
    Color[Color[0] = "R"] = 0;
    Color[Color[1] = "G"] = 1;
    Color[Color[2] = "B"] = 2;
})(Color || (Color = {}));
function f1(x) {
    if (typeof x === "number") {
        var y = x;
        var y;
    }
    else {
        var z = x;
        var z;
    }
}
function f2(x) {
    if (typeof x === "object") {
        var y = x;
        var y;
    }
    if (typeof x === "number") {
        var z = x;
        var z;
    }
    else {
        var w = x;
        var w;
    }
    if (typeof x === "string") {
        var a = x;
        var a;
    }
    else {
        var b = x;
        var b;
    }
}
