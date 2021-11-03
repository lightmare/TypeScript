//// [collisionCodeGenModuleWithEnumMemberConflict.ts]
module m1 {
    enum e {
        m1, 
        m2 = m1
    }
}

//// [collisionCodeGenModuleWithEnumMemberConflict.js]
var m1;
(function (m1) {
    var e;
    (function (e) {
        e[e[0] = "m1"] = 0;
        e[e[0] = "m2"] = 0;
    })(e || (e = {}));
})(m1 || (m1 = {}));
