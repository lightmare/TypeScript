//// [controlFlowBreakContinueWithLabel.ts]
enum User { A, B }

let user: User = User.A

label: while (true) {
    switch (user) {
        case User.A:
            user = User.B;
            continue label;
        case User.B:
            break label;
    }
}
user;


//// [controlFlowBreakContinueWithLabel.js]
"use strict";
var User;
(function () {
    this[this[0] = "A"] = 0;
    this[this[1] = "B"] = 1;
}.call(User || (User = {})));
var user = User.A;
label: while (true) {
    switch (user) {
        case User.A:
            user = User.B;
            continue label;
        case User.B:
            break label;
    }
}
user;
