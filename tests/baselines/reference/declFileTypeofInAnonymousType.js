//// [declFileTypeofInAnonymousType.ts]
module m1 {
    export class c {
    }
    export enum e {
        weekday,
        weekend,
        holiday
    }
}
var a: { c: m1.c; };
var b = {
    c: m1.c,
    m1: m1
};
var c = { m1: m1 };
var d = {
    m: { mod: m1 },
    mc: { cl: m1.c },
    me: { en: m1.e },
    mh: m1.e.holiday
};

//// [declFileTypeofInAnonymousType.js]
var m1;
(function (m1) {
    var c = /** @class */ (function () {
        function c() {
        }
        return c;
    }());
    m1.c = c;
    var e;
    (function () {
        this[this[0] = "weekday"] = 0;
        this[this[1] = "weekend"] = 1;
        this[this[2] = "holiday"] = 2;
    }.call(e = m1.e || (m1.e = {})));
})(m1 || (m1 = {}));
var a;
var b = {
    c: m1.c,
    m1: m1
};
var c = { m1: m1 };
var d = {
    m: { mod: m1 },
    mc: { cl: m1.c },
    me: { en: m1.e },
    mh: m1.e.holiday
};


//// [declFileTypeofInAnonymousType.d.ts]
declare module m1 {
    class c {
    }
    enum e {
        weekday = 0,
        weekend = 1,
        holiday = 2
    }
}
declare var a: {
    c: m1.c;
};
declare var b: {
    c: typeof m1.c;
    m1: typeof m1;
};
declare var c: {
    m1: typeof m1;
};
declare var d: {
    m: {
        mod: typeof m1;
    };
    mc: {
        cl: typeof m1.c;
    };
    me: {
        en: typeof m1.e;
    };
    mh: m1.e;
};
