//// [enumAssignmentCompat4.ts]
namespace M {
    export enum MyEnum {
        BAR
    }
    export var object2 = {
        foo: MyEnum.BAR
    };
}

namespace N {
    export enum MyEnum {
        FOO
    };
    export var object1 = {
        foo: MyEnum.FOO
    };
}

let broken = [
    N.object1,
    M.object2
];


//// [enumAssignmentCompat4.js]
var M;
(function (M) {
    var MyEnum;
    (function () {
        this[this[0] = "BAR"] = 0;
    }.call(MyEnum = M.MyEnum || (M.MyEnum = {})));
    M.object2 = {
        foo: MyEnum.BAR
    };
})(M || (M = {}));
var N;
(function (N) {
    var MyEnum;
    (function () {
        this[this[0] = "FOO"] = 0;
    }.call(MyEnum = N.MyEnum || (N.MyEnum = {})));
    ;
    N.object1 = {
        foo: MyEnum.FOO
    };
})(N || (N = {}));
var broken = [
    N.object1,
    M.object2
];
