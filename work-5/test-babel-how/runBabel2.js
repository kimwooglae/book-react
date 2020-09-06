const babel = require('@babel/core');
const fs = require('fs');

const filename = './src/code.js';
const source = fs.readFileSync(filename, 'utf8');
const presets = ['@babel/preset-react'];

const { ast } = babel.transformSync(source, {
    filename,
    ast: true,
    code: false,
    presets,
    configFile: false
});
console.log('\nsource\n', source);


const {code: code1} = babel.transformFromAstSync(ast, source, {
    plugins: ['@babel/plugin-transform-template-literals'],
    configFile: false
});
console.log('\ncode1\n', code1);

const {code: code2} = babel.transformFromAstSync(ast, source, {
    plugins: ['@babel/plugin-transform-arrow-functions'],
    configFile: false
});
console.log('\ncode2\n', code2);

// const {ast: ast1} = babel.transformFromAstSync(ast, {
//     ast: true,
//     code: false,
//     plugins: ['@babel/plugin-transform-template-functions'],
//     configFile: false
// });
// console.log('ast1\n', ast1);

// const {code: code3} = babel.transformFromAstSync(ast, {
//     plugins: ['@babel/plugin-transform-arrow-functions'],
//     configFile: false
// });
// console.log('code3\n', code3);

