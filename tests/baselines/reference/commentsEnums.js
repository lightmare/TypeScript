//// [commentsEnums.ts]
/** Enum of colors*/
enum Colors {
    /** Fancy name for 'blue'*/
    Cornflower /* blue */,
    /** Fancy name for 'pink'*/
    FancyPink
} // trailing comment
var x = Colors.Cornflower;
x = Colors.FancyPink;



//// [commentsEnums.js]
/** Enum of colors*/
var Colors;
(function () {
    /** Fancy name for 'blue'*/
    this[this[0] = "Cornflower"] = 0; /* blue */
    /** Fancy name for 'pink'*/
    this[this[1] = "FancyPink"] = 1;
}.call(Colors || (Colors = {}))); // trailing comment
var x = Colors.Cornflower;
x = Colors.FancyPink;


//// [commentsEnums.d.ts]
/** Enum of colors*/
declare enum Colors {
    /** Fancy name for 'blue'*/
    Cornflower = 0,
    /** Fancy name for 'pink'*/
    FancyPink = 1
}
declare var x: Colors;
