//// [collisionCodeGenEnumWithEnumMemberConflict.ts]
enum Color {
    Color,
    Thing = Color
}

//// [collisionCodeGenEnumWithEnumMemberConflict.js]
var Color;
(function (Color) {
    Color[Color[0] = "Color"] = 0;
    Color[Color[0] = "Thing"] = 0;
})(Color || (Color = {}));
