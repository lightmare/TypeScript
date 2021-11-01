//// [classStaticInitializersUsePropertiesBeforeDeclaration.ts]
class Foo {
    static enumMember = Enum.A;
    static objLiteralMember = ObjLiteral.A;
    static namespaceMember = Namespace.A;
}

enum Enum {
    A
}

const ObjLiteral = {
    A: 0
};

namespace Namespace {
    export let A = 0
}


//// [classStaticInitializersUsePropertiesBeforeDeclaration.js]
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.enumMember = Enum.A;
    Foo.objLiteralMember = ObjLiteral.A;
    Foo.namespaceMember = Namespace.A;
    return Foo;
}());
var Enum;
(function () {
    this[this[0] = "A"] = 0;
}.call(Enum || (Enum = {})));
var ObjLiteral = {
    A: 0
};
var Namespace;
(function (Namespace) {
    Namespace.A = 0;
})(Namespace || (Namespace = {}));
