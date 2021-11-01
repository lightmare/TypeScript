//// [enumExportMergingES6.ts]
export enum Animals {
	Cat = 1
}
export enum Animals {
	Dog = 2
}
export enum Animals {
	CatDog = Cat | Dog
}


//// [enumExportMergingES6.js]
export var Animals;
(function () {
    this[this[1] = "Cat"] = 1;
}.call(Animals || (Animals = {})));
(function () {
    this[this[2] = "Dog"] = 2;
}.call(Animals || (Animals = {})));
(function () {
    this[this[3] = "CatDog"] = 3;
}.call(Animals || (Animals = {})));
