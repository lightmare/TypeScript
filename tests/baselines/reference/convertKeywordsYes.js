//// [convertKeywordsYes.ts]
// reserved ES5 future in strict mode

var constructor = 0;
var any = 0;
var boolean = 0;
var implements = 0;
var interface = 0;
var let = 0;
var module = 0;
var number = 0;
var package = 0;
var private = 0;
var protected = 0;
var public = 0;
var set = 0;
var static = 0;
var string = 0;
var get = 0;
var yield = 0;
var declare = 0;

function bigGeneric<
    constructor,
    implements ,
    interface ,
    let,
    module ,
    package,
    private ,
    protected,
    public ,
    set ,
    static ,
    get ,
    yield,
    declare
    >(c: constructor,
    a: any,
    b2: boolean,
    i: implements ,
    i2: interface ,
    l: let,
    m: module ,
    n: number,
    p: package,
    p2: private ,
    p3: protected,
    p4: public ,
    s: set ,
    s2: static ,
    s3: string,
    g: get ,
    y: yield,
    d: declare ) { }

var bigObject = {
    constructor: 0,
    any: 0,
    boolean: 0,
    implements: 0,
    interface: 0,
    let: 0,
    module: 0,
    number: 0,
    package: 0,
    private: 0,
    protected: 0,
    public: 0,
    set: 0,
    static: 0,
    string: 0,
    get: 0,
    yield: 0,
    break: 0,
    case: 0,
    catch: 0,
    class: 0,
    continue: 0,
    const: 0,

    debugger: 0,
    declare: 0,
    default: 0,
    delete: 0,
    do: 0,
    else: 0,
    enum: 0,
    export: 0,
    extends: 0,
    false: 0,
    finally: 0,
    for: 0,
    function: 0,
    if: 0,

    import: 0,
    in: 0,
    instanceof: 0,
    new: 0,
    null: 0,
    return: 0,
    super: 0,
    switch: 0,
    this: 0,
    throw: 0,
    true: 0,
    try: 0,
    typeof: 0,
    var: 0,
    void: 0,
    while: 0,
    with: 0,
};

interface bigInterface {
    constructor;
    any;
    boolean;
    implements;
    interface;
    let;
    module;
    number;
    package;
    private;
    protected;
    public;
    set;
    static;
    string;
    get;
    yield;
    break;
    case;
    catch;
    class;
    continue;
    const;

    debugger;
    declare;
    default;
    delete;
    do;
    else;
    enum;
    export;
    extends;
    false;
    finally;
    for;
    function;
    if;

    import;
    in;
    instanceof;
    new;
    null;
    return;
    super;
    switch;
    this;
    throw;
    true;
    try;
    typeof;
    var;
    void;
    while;
    with;
}

class bigClass {
    public "constructor" = 0;
    public any = 0;
    public boolean = 0;
    public implements = 0;
    public interface = 0;
    public let = 0;
    public module = 0;
    public number = 0;
    public package = 0;
    public private = 0;
    public protected = 0;
    public public = 0;
    public set = 0;
    public static = 0;
    public string = 0;
    public get = 0;
    public yield = 0;
    public break = 0;
    public case = 0;
    public catch = 0;
    public class = 0;
    public continue = 0;
    public const = 0;
    public debugger = 0;
    public declare = 0;
    public default = 0;
    public delete = 0;
    public do = 0;
    public else = 0;
    public enum = 0;
    public export = 0;
    public extends = 0;
    public false = 0;
    public finally = 0;
    public for = 0;
    public function = 0;
    public if = 0;
    public import = 0;
    public in = 0;
    public instanceof = 0;
    public new = 0;
    public null = 0;
    public return = 0;
    public super = 0;
    public switch = 0;
    public this = 0;
    public throw = 0;
    public true = 0;
    public try = 0;
    public typeof = 0;
    public var = 0;
    public void = 0;
    public while = 0;
    public with = 0;
}

enum bigEnum {
    constructor,
    any,
    boolean,
    implements,
    interface,
    let,
    module,
    number,
    package,
    private,
    protected,
    public,
    set,
    static,
    string,
    get,
    yield,
    break,
    case,
    catch,
    class,
    continue,
    const,

    debugger,
    declare,
    default,
    delete,
    do,
    else,
    enum,
    export,
    extends,
    false,
    finally,
    for,
    function,
    if,

    import,
    in,
    instanceof,
    new,
    null,
    return,
    super,
    switch,
    this,
    throw,
    true,
    try,
    typeof,
    var,
    void,
    while,
    with,
}

module bigModule {
    class constructor { }
    class implements { }
    class interface { }
    class let { }
    class module { }
    class package { }
    class private { }
    class protected { }
    class public { }
    class set { }
    class static { }
    class get { }
    class yield { }
    class declare { }
}

//// [convertKeywordsYes.js]
// reserved ES5 future in strict mode
var constructor = 0;
var any = 0;
var boolean = 0;
var implements = 0;
var interface = 0;
var let = 0;
var module = 0;
var number = 0;
var package = 0;
var private = 0;
var protected = 0;
var public = 0;
var set = 0;
var static = 0;
var string = 0;
var get = 0;
var yield = 0;
var declare = 0;
function bigGeneric(c, a, b2, i, i2, l, m, n, p, p2, p3, p4, s, s2, s3, g, y, d) { }
var bigObject = {
    constructor: 0,
    any: 0,
    boolean: 0,
    implements: 0,
    interface: 0,
    let: 0,
    module: 0,
    number: 0,
    package: 0,
    private: 0,
    protected: 0,
    public: 0,
    set: 0,
    static: 0,
    string: 0,
    get: 0,
    yield: 0,
    "break": 0,
    "case": 0,
    "catch": 0,
    "class": 0,
    "continue": 0,
    "const": 0,
    "debugger": 0,
    declare: 0,
    "default": 0,
    "delete": 0,
    "do": 0,
    "else": 0,
    "enum": 0,
    "export": 0,
    "extends": 0,
    "false": 0,
    "finally": 0,
    "for": 0,
    "function": 0,
    "if": 0,
    "import": 0,
    "in": 0,
    "instanceof": 0,
    "new": 0,
    "null": 0,
    "return": 0,
    "super": 0,
    "switch": 0,
    "this": 0,
    "throw": 0,
    "true": 0,
    "try": 0,
    "typeof": 0,
    "var": 0,
    "void": 0,
    "while": 0,
    "with": 0
};
var bigClass = /** @class */ (function () {
    function bigClass() {
        this["constructor"] = 0;
        this.any = 0;
        this.boolean = 0;
        this.implements = 0;
        this.interface = 0;
        this.let = 0;
        this.module = 0;
        this.number = 0;
        this.package = 0;
        this.private = 0;
        this.protected = 0;
        this.public = 0;
        this.set = 0;
        this.static = 0;
        this.string = 0;
        this.get = 0;
        this.yield = 0;
        this["break"] = 0;
        this["case"] = 0;
        this["catch"] = 0;
        this["class"] = 0;
        this["continue"] = 0;
        this["const"] = 0;
        this["debugger"] = 0;
        this.declare = 0;
        this["default"] = 0;
        this["delete"] = 0;
        this["do"] = 0;
        this["else"] = 0;
        this["enum"] = 0;
        this["export"] = 0;
        this["extends"] = 0;
        this["false"] = 0;
        this["finally"] = 0;
        this["for"] = 0;
        this["function"] = 0;
        this["if"] = 0;
        this["import"] = 0;
        this["in"] = 0;
        this["instanceof"] = 0;
        this["new"] = 0;
        this["null"] = 0;
        this["return"] = 0;
        this["super"] = 0;
        this["switch"] = 0;
        this["this"] = 0;
        this["throw"] = 0;
        this["true"] = 0;
        this["try"] = 0;
        this["typeof"] = 0;
        this["var"] = 0;
        this["void"] = 0;
        this["while"] = 0;
        this["with"] = 0;
    }
    return bigClass;
}());
var bigEnum;
(function () {
    this[this[0] = "constructor"] = 0;
    this[this[1] = "any"] = 1;
    this[this[2] = "boolean"] = 2;
    this[this[3] = "implements"] = 3;
    this[this[4] = "interface"] = 4;
    this[this[5] = "let"] = 5;
    this[this[6] = "module"] = 6;
    this[this[7] = "number"] = 7;
    this[this[8] = "package"] = 8;
    this[this[9] = "private"] = 9;
    this[this[10] = "protected"] = 10;
    this[this[11] = "public"] = 11;
    this[this[12] = "set"] = 12;
    this[this[13] = "static"] = 13;
    this[this[14] = "string"] = 14;
    this[this[15] = "get"] = 15;
    this[this[16] = "yield"] = 16;
    this[this[17] = "break"] = 17;
    this[this[18] = "case"] = 18;
    this[this[19] = "catch"] = 19;
    this[this[20] = "class"] = 20;
    this[this[21] = "continue"] = 21;
    this[this[22] = "const"] = 22;
    this[this[23] = "debugger"] = 23;
    this[this[24] = "declare"] = 24;
    this[this[25] = "default"] = 25;
    this[this[26] = "delete"] = 26;
    this[this[27] = "do"] = 27;
    this[this[28] = "else"] = 28;
    this[this[29] = "enum"] = 29;
    this[this[30] = "export"] = 30;
    this[this[31] = "extends"] = 31;
    this[this[32] = "false"] = 32;
    this[this[33] = "finally"] = 33;
    this[this[34] = "for"] = 34;
    this[this[35] = "function"] = 35;
    this[this[36] = "if"] = 36;
    this[this[37] = "import"] = 37;
    this[this[38] = "in"] = 38;
    this[this[39] = "instanceof"] = 39;
    this[this[40] = "new"] = 40;
    this[this[41] = "null"] = 41;
    this[this[42] = "return"] = 42;
    this[this[43] = "super"] = 43;
    this[this[44] = "switch"] = 44;
    this[this[45] = "this"] = 45;
    this[this[46] = "throw"] = 46;
    this[this[47] = "true"] = 47;
    this[this[48] = "try"] = 48;
    this[this[49] = "typeof"] = 49;
    this[this[50] = "var"] = 50;
    this[this[51] = "void"] = 51;
    this[this[52] = "while"] = 52;
    this[this[53] = "with"] = 53;
}.call(bigEnum || (bigEnum = {})));
var bigModule;
(function (bigModule) {
    var constructor = /** @class */ (function () {
        function constructor() {
        }
        return constructor;
    }());
    var implements = /** @class */ (function () {
        function implements_1() {
        }
        return implements_1;
    }());
    var interface = /** @class */ (function () {
        function interface_1() {
        }
        return interface_1;
    }());
    var let = /** @class */ (function () {
        function let_1() {
        }
        return let_1;
    }());
    var module = /** @class */ (function () {
        function module() {
        }
        return module;
    }());
    var package = /** @class */ (function () {
        function package_1() {
        }
        return package_1;
    }());
    var private = /** @class */ (function () {
        function private_1() {
        }
        return private_1;
    }());
    var protected = /** @class */ (function () {
        function protected_1() {
        }
        return protected_1;
    }());
    var public = /** @class */ (function () {
        function public_1() {
        }
        return public_1;
    }());
    var set = /** @class */ (function () {
        function set() {
        }
        return set;
    }());
    var static = /** @class */ (function () {
        function static_1() {
        }
        return static_1;
    }());
    var get = /** @class */ (function () {
        function get() {
        }
        return get;
    }());
    var yield = /** @class */ (function () {
        function yield_1() {
        }
        return yield_1;
    }());
    var declare = /** @class */ (function () {
        function declare() {
        }
        return declare;
    }());
})(bigModule || (bigModule = {}));
