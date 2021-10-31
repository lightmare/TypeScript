//// [enumNumbering1.ts]
enum Test {
    A,
    B,
    C = Math.floor(Math.random() * 1000),
    D = 10,
    E // Error but shouldn't be
}


//// [enumNumbering1.js]
var Test;
(function (Test) {
    Test[Test[0] = "A"] = 0;
    Test[Test[1] = "B"] = 1;
    Test[Test["C"] = Math.floor(Math.random() * 1000)] = "C";
    Test[Test[10] = "D"] = 10;
    Test[Test[11] = "E"] = 11; // Error but shouldn't be
})(Test || (Test = {}));
