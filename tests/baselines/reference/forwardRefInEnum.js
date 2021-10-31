//// [forwardRefInEnum.ts]
enum E1 {
    // illegal case
    // forward reference to the element of the same enum
    X = Y, 
    X1 = E1["Y"], 
    // forward reference to the element of the same enum
    Y = E1.Z,
    Y1 = E1["Z"]
}

enum E1 {
    Z = 4    
}


//// [forwardRefInEnum.js]
var E1;
(function (E1) {
    // illegal case
    // forward reference to the element of the same enum
    E1[E1[0] = "X"] = 0;
    E1[E1[0] = "X1"] = 0;
    // forward reference to the element of the same enum
    E1[E1[0] = "Y"] = 0;
    E1[E1[0] = "Y1"] = 0;
})(E1 || (E1 = {}));
(function (E1) {
    E1[E1[4] = "Z"] = 4;
})(E1 || (E1 = {}));
