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
(function (Animals) {
    Animals[Animals[1] = "Cat"] = 1;
})(Animals || (Animals = {}));
(function (Animals) {
    Animals[Animals[2] = "Dog"] = 2;
})(Animals || (Animals = {}));
(function (Animals) {
    Animals[Animals[3] = "CatDog"] = 3;
})(Animals || (Animals = {}));
