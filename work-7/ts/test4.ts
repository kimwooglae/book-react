
function getInfoText(name: string, age: number) : string {
    const nameText =name.substr(0, 10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    return `name: ${nameText}, age: ${ageText}`;
}

const v1: string = getInfoText('mike', 23);
const v2: string = getInfoText('mike', '35');
const v3: number = getInfoText('mike', 33);

console.log(v1);
console.log(v2);
console.log(v3);

const funcInfoText: (name:string, age: number) => string = function(name:string, age:number):string {
    return '';
}


function getInfoText1(name: string, age: number, language?: string): string {
    const nameText = name.substr(0, 10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    const languageText = language? language.substr(0, 10) : '';
    return `name: ${nameText}, age: ${ageText}, language: ${languageText}`;
}

console.log(getInfoText1('jane', 43, 'en'));
console.log(getInfoText1('john', 22, 'korea'));
console.log(getInfoText1('mike', 22,33));