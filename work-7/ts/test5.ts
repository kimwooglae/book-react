
function getInfoText2(name: string, language : string | undefined, age: number) : void {
    const nameText = name.substr(0, 10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    const languageText = language? language.substr(0, 10) : '';
    `name: ${nameText}, age: ${ageText}, language: ${languageText}`;
}

function getParam(index: number) : string {
    return this.split(',')[index];
}

function getParam1(this: string, index: number) : string {
    return this.split(',')[index];
}


interface String {
    getParam(this: string, index: number): string
}

String.prototype.getParam = getParam;

console.log('abc,def,ghi'.getParam(2));
