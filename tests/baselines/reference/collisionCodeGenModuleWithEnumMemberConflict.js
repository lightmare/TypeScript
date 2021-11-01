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
    (function () {
        this[this[0] = "m1"] = 0;
        this[this[0] = "m2"] = 0;
    }.call(e || (e = {})));
})(m1 || (m1 = {}));
