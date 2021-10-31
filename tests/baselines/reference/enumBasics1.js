//// [enumBasics1.ts]
enum E {
	A = 1,
	B,
	C
}

/*
var a: E;
var b = E["B"]; // shouldn't error


function foo(e: E) {}

foo(a); // shouldn't error


class C {
	public e: E;

	public m(): E { return this.e; } // shouldn't error
}


var e = E; // shouldn't error
*/
E.A.A; // should error


enum E2 {
	A,
	B,
}

enum E2 { // should error for continued autonumbering
	C,
	D,
}

//// [enumBasics1.js]
var E;
(function (E) {
    E[E[1] = "A"] = 1;
    E[E[2] = "B"] = 2;
    E[E[3] = "C"] = 3;
})(E || (E = {}));
/*
var a: E;
var b = E["B"]; // shouldn't error


function foo(e: E) {}

foo(a); // shouldn't error


class C {
    public e: E;

    public m(): E { return this.e; } // shouldn't error
}


var e = E; // shouldn't error
*/
E.A.A; // should error
var E2;
(function (E2) {
    E2[E2[0] = "A"] = 0;
    E2[E2[1] = "B"] = 1;
})(E2 || (E2 = {}));
(function (E2) {
    E2[E2[0] = "C"] = 0;
    E2[E2[1] = "D"] = 1;
})(E2 || (E2 = {}));
