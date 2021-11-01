//// [EnumAndModuleWithSameNameAndCommonRoot.ts]
enum enumdule {
    Red, Blue
}

module enumdule {

    export class Point {
        constructor(public x: number, public y: number) { }
    }
}

var x: enumdule;
var x = enumdule.Red;

var y: { x: number; y: number };
var y = new enumdule.Point(0, 0);

//// [EnumAndModuleWithSameNameAndCommonRoot.js]
var enumdule;
(function () {
    this[this[0] = "Red"] = 0;
    this[this[1] = "Blue"] = 1;
}.call(enumdule || (enumdule = {})));
(function (enumdule) {
    var Point = /** @class */ (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        return Point;
    }());
    enumdule.Point = Point;
})(enumdule || (enumdule = {}));
var x;
var x = enumdule.Red;
var y;
var y = new enumdule.Point(0, 0);
