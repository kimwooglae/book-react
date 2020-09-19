interface Person {
    readonly name: string;
    age?: number;
}

const p1: Person = {name:'jane'}
const p2: Person = {name:'jane', age:22}

interface YearPriceMap {
    [year: number]: number;
    [year: string]: string | number;
}

const yearMap: YearPriceMap = {};

yearMap[100] = 123;
console.log(yearMap[100]);
yearMap['100'] = '234';
console.log(yearMap[100]);
yearMap[100] = '345';
console.log(yearMap[100]);
console.log(yearMap['100']);
yearMap['100'] = 999;

console.log(yearMap[100]);
console.log(yearMap['100']);



interface GetInfoText {
    (name: string, age: number): string;
    totalCall: number;
}

const getInfoText: GetInfoText = function(name, age) {
    getInfoText.totalCall++;
    const nameText = name.substr(0,10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    return `name: ${nameText}, age: ${ageText}`; 
}
getInfoText.totalCall = 0;

