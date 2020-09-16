let v: object;
v = { name: 'abc'};
console.log(v.prop1);

type Width = number | string;
let width: Width;
width = 100;
width = '100px'

enum Fruit {
    Apple,
    Banana,
    Orange
}

const v1: Fruit = Fruit.Apple
console.log(v1);

enum Fruit1 {
    Apple,
    Banana = 20,
    Orange = 40
}

enum Lang {
    Korean = 'ko',
    English = 'en',
    Japanese = 'jp',
    Chinese = 'cn',
}

function getEnumLength(enumObj: any) {
    const keys = Object.keys(enumObj);
    return keys.reduce(
        (acc, key) => (typeof enumObj[key] === 'string' ? acc + 1 : acc), 0
    );
}

function isValidEnumValue(enumObj: any, value: number|string) {
    if(typeof value === 'number') {
        return !!enumObj[value];
    } else {
        return (
            Object.keys(enumObj)
                .filter(key => isNaN(Number(key)))
                .some(key => enumObj[key] === value)
        );
    }
}

console.log(getEnumLength(Fruit));
console.log('1 in Fruit', isValidEnumValue(Fruit, 1));
console.log('5 in Fruit', isValidEnumValue(Fruit, 5));
console.log('ko in Lang', isValidEnumValue(Lang, 'ko'))
console.log('ko in Lang', isValidEnumValue(Lang, 'Korean'))
