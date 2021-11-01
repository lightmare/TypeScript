//// [mappedTypeOverlappingStringEnumKeys.ts]
// #37859

enum TerrestrialAnimalTypes {
  CAT = "cat",
  DOG = "dog"
};

enum AlienAnimalTypes {
  CAT = "cat",
};

type AnimalTypes = TerrestrialAnimalTypes | AlienAnimalTypes;

interface TerrestrialCat {
  type: TerrestrialAnimalTypes.CAT;
  address: string;
}

interface AlienCat {
  type: AlienAnimalTypes.CAT
  planet: string;
}

type Cats = TerrestrialCat | AlienCat;

type CatMap = {
  [V in AnimalTypes]: Extract<Cats, { type: V }>[]
};

const catMap: CatMap = {
  cat: [
    { type: TerrestrialAnimalTypes.CAT, address: "" },
    { type: AlienAnimalTypes.CAT, planet: "" }
  ],
  dog: [] as never[]
};


//// [mappedTypeOverlappingStringEnumKeys.js]
// #37859
var TerrestrialAnimalTypes;
(function () {
    this["CAT"] = "cat";
    this["DOG"] = "dog";
}.call(TerrestrialAnimalTypes || (TerrestrialAnimalTypes = {})));
;
var AlienAnimalTypes;
(function () {
    this["CAT"] = "cat";
}.call(AlienAnimalTypes || (AlienAnimalTypes = {})));
;
var catMap = {
    cat: [
        { type: TerrestrialAnimalTypes.CAT, address: "" },
        { type: AlienAnimalTypes.CAT, planet: "" }
    ],
    dog: []
};
