/* const reg1 = new RegExp("bola");

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem"));

const reg2 = /bola/;

let text = "Tem bola na cesta";

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem"));
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado")) */

/* const reg1 = /[12345]/

console.log(reg1.test("Temos o número 6")) */

const pontoRegex = /./;

console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(""));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123asd"));

const dRegex = /\d/; // [0-9]
console.log(dRegex.test("asd"));
console.log(dRegex.test(""));
console.log(dRegex.test("123"));
console.log(dRegex.test("123asd"));

const dRegex2 = /\D/; // [^0-9]
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(""));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123asd"));

const sRegex = /\s/; 
console.log(sRegex.test("asd"));
console.log(sRegex.test(""));
console.log(sRegex.test("123"));
console.log(sRegex.test("123asd"));

const wRegex = /\w/; 
console.log(wRegex.test("asd"));
console.log(wRegex.test(""));
console.log(wRegex.test("123"));
console.log(wRegex.test("123asd"));