//import 'core-js';

const element = <div>babel test</div>;
const text = `element type is ${element.type}`;
const add = (a, b) => a + b;


const p = Promise.resolve(10);
const obj = {
    a:10,
    b:20,
    c:30,
}

const arr = Object.values(obj);
const exist = arr.includes(20);