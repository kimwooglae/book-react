interface Person {
    name: string;
    age?: number;
}

interface Product {
    name: string;
    age: number;
}

const person: Person = {
    name : 'jane',
    age: 22
}

const product: Product = person;


interface Person1 {
    name: string;
    age : number,
    gender: string
}

interface Product1 {
    name: string;
    age: number | string;
}


const person1 : Person1 = {
    name: 'dave',
    age:2,
    gender: '남'
}

const product1 : Product1 = person1;

console.log(person1.gender);
console.log(product1.gender);


function makeArray<T>(defaultValue: T, size: number): T[] {
    const arr: T[] = [];
    for(let i = 0; i < size ; i++) {
        arr.push(defaultValue);
    }
    return arr;
}

const arr1 = makeArray<number>(1,10);
const arr2 = makeArray<string>('a',200);


function identity<T extends number | string>(p1 : T) : T {
    return p1;
}

identity(1);
identity('dd');
identity([]);


interface Person {
    name: string;
    age: number;
}

interface Korean extends Person {
    liveInSeoul: boolean;
}

function swapProperty<T extends Person, K extends keyof Person>(p1:T, p2:T, name:K) : void {
   const temp = p1[name];
   p1[name] = p2[name];
   p2[name] = temp;
}

const p1:Korean = {
    name: '홍길동',
    age: 23,
    liveInSeoul: true
}

const p2:Korean = {
    name: '김삿갓',
    age: 31,
    liveInSeoul: false
}

console.log(p1);

swapProperty(p1, p2, 'age');

console.log(p1);


enum Fruit {
    Apple,
    Banana,
    Orange
}
const a = {
    [Fruit.Apple] : 11
}
const FRUIT_PRICE: { [key in Fruit] : number} = {
    [Fruit.Apple] : 1000,
    [Fruit.Banana] : 1500,
    [Fruit.Orange]:333
}

console.log(Fruit.Apple);

console.log(JSON.stringify(FRUIT_PRICE));

type T100 = string;
type T200 = number;

type ReadOnly1<T> = { readonly [P in keyof T] : T[P]};
type Partial1<T> = { [P in keyof T]?: T[P]}

type IsStringType<T> = T extends string? 'yes' : 'no';
type T1 = IsStringType<string>;
type T2 = IsStringType<number>;
type T3 = IsStringType<string | number>;

const v1:T1 = 'yes';
const v2:T2 = 'no';
const v31:T3 = 'yes';
const v32:T3 = 'no';





type T10 = number | string | never; // string | number
type Exclude1<T, U> = T extends U ? never: T;
type T20 = Exclude1<1 | 3 | 5 | 7, 1 | 5 | 9>; // 3, 7
const v20:T20 = 3;


type ReturnType1<T> = T extends (...args:any[]) => infer R? R: any;
type T21 = ReturnType1<() => string>;
function f1(s:string): number {
    return s.length;
}
type T22 = ReturnType1<typeof f1>;
const v22:T22 = 22;

type T23 = ReturnType1<typeof f1>;
const v23:T23 = 22;
console.log(typeof f1);

const v30 = 123;
console.log(typeof v30);

const v40: typeof v30 = 11;