//// [ModuleAndEnumWithSameNameAndCommonRoot.ts]
module enumdule {

    export class Point {
        constructor(public x: number, public y: number) { }
    }
}

enum enumdule {
    Red, Blue
}

var x: enumdule;
var x = enumdule.Red;

var y: { x: number; y: number };
var y = new enumdule.Point(0, 0);

//// [ModuleAndEnumWithSameNameAndCommonRoot.js]
var enumdule;
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
(function (enumdule) {
    enumdule[enumdule[0] = "Red"] = 0;
    enumdule[enumdule[1] = "Blue"] = 1;
})(enumdule || (enumdule = {}));
var x;
var x = enumdule.Red;
var y;
var y = new enumdule.Point(0, 0);
