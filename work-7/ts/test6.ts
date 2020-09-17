
function getParam(index: number) : string {
    return this.split(',')[index];
}

interface String {
    getParam(this: string, index: number): string
}

String.prototype.getParam = getParam;

console.log('abc,def,ghi'.getParam(2));


interface Person {
    readonly name: string;
    age?: number;
}

const p1: Person = {name:'jane'}
const p2: Person = {name:'jane', age:22}

p1.name = 'jack';


const p3: Person = {name:'david', birthday:'11'};

const p4 ={name:'david', birthday:'11'};
const p5:Person = p4;

const p6 ={name:'david', age:"33", birthday:'11'};
const p7:Person = p6;