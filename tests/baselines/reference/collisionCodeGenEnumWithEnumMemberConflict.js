//// [collisionCodeGenEnumWithEnumMemberConflict.ts]
enum Color {
    Color,
    Thing = Color
}

//// [collisionCodeGenEnumWithEnumMemberConflict.js]
var Color;
(function () {
    this[this[0] = "Color"] = 0;
    this[this[0] = "Thing"] = 0;
}.call(Color || (Color = {})));
