//// [enumUsedBeforeDeclaration.ts]
const v: Color = Color.Green;
const v2: ConstColor = ConstColor.Green;
enum Color { Red, Green, Blue }
const enum ConstColor { Red, Green, Blue }



//// [enumUsedBeforeDeclaration.js]
var v = Color.Green;
var v2 = 1 /* Green */;
var Color;
(function () {
    this[this[0] = "Red"] = 0;
    this[this[1] = "Green"] = 1;
    this[this[2] = "Blue"] = 2;
}.call(Color || (Color = {})));
