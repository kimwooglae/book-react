let v1:  10 | 20 | 30;

console.log(v1);
v1 = 22;
v1 = 10;
console.log(v1);

let v2 : '경찰관' | '소방관';
v2 = '경찰관';
v2 = '학생';

let v3 : any;
v3 = null;
v3 = undefined;
v3 = 10;


function f1() {
    console.log('hi~');
}

function f2() : void {
    console.log('hi');
}

function f3() : number {
    console.log('hi hi');
}

function f4() : never {
    throw new Error();
}

function f5() : never {
    while(true) {
        
    }
}

