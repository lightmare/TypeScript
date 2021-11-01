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
    (function () {
        this[this[0] = "Red"] = 0;
        this[this[1] = "Blue"] = 1;
    }.call(Color = A.Color || (A.Color = {})));
    var Day;
    (function () {
        this[this[0] = "Monday"] = 0;
        this[this[1] = "Tuesday"] = 1;
    }.call(Day || (Day = {})));
})(A || (A = {}));
// not an error since exported
var a = A.Color.Red;
// error not exported
var b = A.Day.Monday;
