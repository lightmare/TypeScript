//// [ModuleWithExportedAndNonExportedEnums.ts]
module A {
    export enum Color { Red, Blue }
    enum Day { Monday, Tuesday }
}

// not an error since exported
var a: A.Color = A.Color.Red;

// error not exported
var b = A.Day.Monday;


//// [ModuleWithExportedAndNonExportedEnums.js]
var A;
(function (A) {
    var Color;
    (function (Color) {
        Color[Color[0] = "Red"] = 0;
        Color[Color[1] = "Blue"] = 1;
    })(Color = A.Color || (A.Color = {}));
    var Day;
    (function (Day) {
        Day[Day[0] = "Monday"] = 0;
        Day[Day[1] = "Tuesday"] = 1;
    })(Day || (Day = {}));
})(A || (A = {}));
// not an error since exported
var a = A.Color.Red;
// error not exported
var b = A.Day.Monday;
