
interface Person {
    name: string;
    age: number;
//    isYoungerThan(age: number): boolean;
}

class SomePerson implements Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    isYoungerThan(age: number) {
        return this.age < age;
    }
}

interface Programmer {
    favoriteProgrammingLanguage: string;
}


interface Korean extends Person {
    isLiveInSeoul: boolean;
}

interface KoreanProgrammer extends Person, Programmer {
    isLiveInSeoul: boolean;
}

interface Product {
    name: string;
    price: number;
}

type PP = Person & Product;

const pp: PP = {
    name: 'a',
    age: 23,
    price: 10000
}

function func1(a: number, b: number | string) {
    const v1: number | string = a;
    const v2 : number = b;
}

function func2(a: 1| 2) {
    const v1: 1 | 3 = a;
    const v2: 1 | 2 | 3 = a;
}
