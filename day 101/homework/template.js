const name = "alex";
console.log(`My name is ${name}`);

console.log(`Hello!
my name is:
Alex!`);

console.log(`Sum of 5 and 6 is ${5 + 6}`);

const date = new Date();
console.log(`Today is year: ${date.getFullYear()}, month: ${date.getMonth()} and day ${date.getDay()}`);


const link = "example.ge";
const path = '/alex';
console.log(`${link}${path}`);

console.log(`I love ${name == 'alex' ? 'khinkhali' : 'shaurma'}`);

const street = "Alublebi";
const city = "Tbilisi";
console.log(`I live in ${city} on ${street} street.`);

const html = `
    <h1>${name}</h1>
`
document.getElementsByTagName('body')[0].insertAdjacentHTML("afterbegin", html);

const arr = [1, 2, 3, 4, 5, 6];
console.log(`All elements: ${arr}`);

const num = () => 5 % 2;
console.log(`Function result: ${num()}`); 