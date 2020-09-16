let v1 : number | string = 123;
v1 = 'abc';

const size: number = 123;
const isBig: boolean = size >= 100;
const msg: string = isBig ? '크다' : '작다';

const values: number[] = [1,2,3];
const values2: Array<number> = [1,2,3];
values.push('a');

const data: [string, number] = [msg, size];
data[0].substr(1);
data[1].substr(1);

v1 = 'abc';


let v2: undefined = undefined;
let v3: null = null;
v1 = undefined;
v1 = null;

let v4 : number | undefined = undefined;
v4 = 21;
